import { type CallOptions, type PromiseClient, createPromiseClient } from "@connectrpc/connect";
import { createGrpcTransport } from "@connectrpc/connect-node";
import { type WritableIterable, createWritableIterable } from "@connectrpc/connect/protocol";
import { MainService } from "../../proto/spawner/main/v1/main_connect";
import { type FeatureConfiguration, GenerateSessionTokenRequest } from "../../proto/spawner/main/v1/main_pb";
import { SpawnerPacket as ProtoPacket, SpawnerPacketType } from "../../proto/spawner/packet/v1/packet_pb";
import type { ConnectionConfig } from "../common/types";

import { Actor, CharacterActor, PlayerActor } from "../../proto/spawner/actor/v1/actor_pb";
import {
	ChannelController,
	ChannelControllerType,
	ChannelHost,
	ChannelMember,
} from "../../proto/spawner/channel/v1/channel_pb";
import { LanguageCode } from "../../proto/spawner/language_code/v1/language_code_pb";
import { Scene as ProtoScene } from "../../proto/spawner/scene/v1/scene_pb";
import { SessionController, SessionControllerType } from "../../proto/spawner/session/v1/session_pb";
import type MainServiceType from "../common/types";
import type { ConnectionError } from "../common/types";
import type { Character } from "../entities/character.entity";
import { PacketError } from "../entities/packets/error.entity";
import { SpawnerPacket } from "../entities/packets/spawner_packet.entity";
import type { Player } from "../entities/player.entity";
import type { Scene } from "../entities/scene.entity";
import type { SessionToken } from "../entities/session_token.entity";

interface OpenSessionProps {
	sessionToken: SessionToken;
	scene: Scene | undefined;
	onError: ((err: ConnectionError) => void) | undefined;
	onMessage: ((packet: SpawnerPacket) => void) | undefined;
	onClose: (() => void) | undefined;
}

interface ServiceProps {
	config: ConnectionConfig;
}

interface GenerateSessionTokenProps {
	apiKey: string;
	apiSecret: string;
	workspaceId: string;
	playerId: string;
	featureConfiguration: FeatureConfiguration;
}

export class SpawnerMainService {
	private config: ConnectionConfig;
	private client: PromiseClient<MainServiceType>;

	constructor(props: ServiceProps) {
		this.config = props.config;

		this.client = this.createClient();
	}

	private createClient() {
		const { hostname } = this.config.gateway!;
		const client = createPromiseClient<MainServiceType>(
			MainService,
			createGrpcTransport({
				httpVersion: "2",
				baseUrl: `http://${hostname}`,
			}),
		);
		return client;
	}

	async openSession(props: OpenSessionProps): Promise<[WritableIterable<ProtoPacket>, ProtoScene]> {
		const { sessionToken, scene, onMessage, onError, onClose } = props;

		const connection = createWritableIterable<ProtoPacket>();
		const options = this.getOptions(sessionToken);
		const responses = this.client.connectSession(connection, options);

		const loadedScene = await this.loadScene(sessionToken, scene);

		const processResponses = async () => {
			try {
				for await (const res of responses) {
					if (res.success) {
						onMessage?.(SpawnerPacket.convertProto(res));
					} else {
						// caught spawner packet error
						const err = PacketError.convertProto(res.error!);
						onError?.(err);
					}
				}
			} catch (err: unknown) {
				// caught grpc error
				onError?.(err);
			} finally {
				onClose?.();
			}
		};

		processResponses();

		return Promise.resolve([connection, loadedScene]);
	}

	async openChannel(sessionToken: SessionToken, players: Player[], characters: Character[]) {
		const host = new ChannelHost({
			sessionId: sessionToken.sessionId,
		});
		const members = [new ChannelMember({ sessionId: sessionToken.sessionId })];

		const actor = new Actor({
			players: players.map((p) => new PlayerActor({ id: p.id, displayName: p.display_name })),
			characters: characters.map((c) => new CharacterActor({ customId: c.id })),
		});
		const channelController = new ChannelController({
			type: ChannelControllerType.CREATE,
			host,
			members,
			actor,
		});

		const packet = new ProtoPacket({
			type: SpawnerPacketType.CHANNEL_CONTROLLER,
			payload: {
				case: "channelController",
				value: channelController,
			},
		});

		const options = this.getOptions(sessionToken);

		const channelPacket = await this.client.openChannel(packet, options);

		const channel = channelPacket.payload.value as ChannelController;
		return channel;
	}

	async generateSessionToken(props: GenerateSessionTokenProps) {
		const generateSessionTokenRequest = new GenerateSessionTokenRequest({
			apiKey: props.apiKey,
			apiSecret: props.apiSecret,
			workspaceId: props.workspaceId,
			playerId: props.playerId,
			featureConfiguration: props.featureConfiguration,
			languageCode: LanguageCode.JA,
		});

		const sessionToken = await this.client.generateSessionToken(generateSessionTokenRequest);

		return sessionToken;
	}

	async loadScene(sessionToken: SessionToken, scene?: Scene) {
		if (!sessionToken.token) {
			throw Error("Session token is not valid. Generate a session token before loading scene.");
		}

		const protoScene = new ProtoScene({
			customId: scene?.id,
			description: scene?.description,
		});

		const sessionController = new SessionController({
			type: SessionControllerType.LOAD,
			payload: {
				value: protoScene,
				case: "scene",
			},
		});

		const packet = new ProtoPacket({
			type: SpawnerPacketType.SESSION_CONTROLLER,
			payload: {
				case: "sessionController",
				value: sessionController,
			},
		});

		const options = this.getOptions(sessionToken);

		const loadedScenePacket = await this.client.loadScene(packet, options);

		const loadSceneSessionController = loadedScenePacket.payload.value as SessionController;
		const loadedScene = loadSceneSessionController.payload.value as ProtoScene;
		return loadedScene;
	}

	private getOptions(sessionToken: SessionToken) {
		const { token } = sessionToken;
		const headers = new Headers();
		headers.set("authorization", token);
		const options: CallOptions = {
			headers,
		};
		return options;
	}
}
