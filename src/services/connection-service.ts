import type { WritableIterable } from "@connectrpc/connect/protocol";
import { FeatureConfiguration } from "../../proto/spawner/main/v1/main_pb";
import { SpawnerPacket as ProtoPacket, SpawnerPacketType } from "../../proto/spawner/packet/v1/packet_pb";
import { EventActorType } from "../../proto/spawner/routing/v1/routing_pb";
import { TextEvent } from "../../proto/spawner/text/v1/text_pb";
import { ConnectionState } from "../common/types";
import type { ApiKey } from "../common/types";
import type { ConnectionConfig } from "../common/types";
import type { ConnectionError } from "../common/types";
import { Channel } from "../entities/channel.entity";
import type { Character } from "../entities/character.entity";
import type { SpawnerPacket } from "../entities/packets/spawner_packet.entity";
import { Player } from "../entities/player.entity";
import { Scene } from "../entities/scene.entity";
import { SessionToken } from "../entities/session_token.entity";
import { SpawnerMainService } from "./main-service";

interface ConnectionProps {
	config: ConnectionConfig;
	apiKey: ApiKey;
	workspaceId: string;
	scene?: Scene;
	player?: Player;
	onOpen?: () => void;
	onError?: (err: ConnectionError) => void;
	onMessage?: (packet: SpawnerPacket) => void;
	onClose?: () => void;
}

export class ConnectionService {
	private connectionProps: ConnectionProps;
	private stream!: WritableIterable<ProtoPacket>;
	private state: ConnectionState = ConnectionState.INACTIVE;
	private sessionToken!: SessionToken | undefined;
	private scene: Scene | undefined;
	private channel: Channel | undefined;
	private players: Player[];
	private characters: Character[] = [];

	private onOpen: (() => void) | undefined;
	private onError: ((err: ConnectionError) => void) | undefined;
	private onMessage: ((packet: SpawnerPacket) => void) | undefined;
	private onClose: (() => void) | undefined;

	private mainService: SpawnerMainService;

	constructor(props: ConnectionProps) {
		this.connectionProps = props;
		const { config, player, onOpen, onError, onMessage, onClose } = props;

		this.onOpen = () => {
			this.state = ConnectionState.ACTIVE;
			onOpen?.();
		};

		this.onError = onError;

		this.onMessage = (packet: SpawnerPacket) => {
			// additional service code.
			if (packet.isText()) {
				onMessage?.(packet);
			}
		};

		this.onClose = () => {
			this.state = ConnectionState.INACTIVE;

			onClose?.();
		};

		this.players = this.ensurePlayer(player);

		this.mainService = new SpawnerMainService({
			config,
		});
	}

	async open() {
		if (this.state !== ConnectionState.INACTIVE) return;

		this.state = ConnectionState.ACTIVATING;

		await this.ensureSessionToken();

		if (!this.sessionToken) return;

		const [stream, loadedScene] = await this.mainService.openSession({
			sessionToken: this.sessionToken,
			scene: this.connectionProps.scene,
			onMessage: this.onMessage,
			onError: this.onError,
			onClose: this.onClose,
		});

		this.scene = Scene.convertProto(loadedScene);
		if (this.scene.characters) {
			this.characters = this.scene.characters;
		}
		this.stream = stream;
		this.state = ConnectionState.ACTIVE;
		console.log("Connection is active. You are ready to open the channel.");

		const channel = await this.mainService.openChannel(this.sessionToken, this.players, this.characters);

		this.channel = Channel.convertProto(channel);
	}

	close() {
		this.state = ConnectionState.INACTIVE;
		this.stream.close();
		this.onClose?.();
	}

	isActive() {
		return this.state === ConnectionState.ACTIVE;
	}

	getConnectionState() {
		return this.state;
	}

	async sendText(text: string) {
		this.validate();

		const textEvent = new TextEvent({
			utteranceId: "utterance_id",
			text,
		});

		const packet = new ProtoPacket({
			type: SpawnerPacketType.TEXT,
			routing: {
				source: {
					type: EventActorType.PLAYER,
					player: {
						id: this.players[0].id,
					},
				},
				target: {
					type: EventActorType.CHARACTER,
					character: {
						customId: this.characters[0].id,
					},
				},
			},
			payload: {
				case: "text",
				value: textEvent,
			},
		});

		await this.stream.write(packet);
	}

	async generateSessionToken() {
		const featureConfiguration = new FeatureConfiguration({
			emotion: false,
			inputFilter: false,
		});
		const protoSession = await this.mainService.generateSessionToken({
			apiKey: this.connectionProps.apiKey.key,
			apiSecret: this.connectionProps.apiKey.secret,
			workspaceId: this.connectionProps.workspaceId,
			playerId: "player-1",
			featureConfiguration,
		});

		const sessionToken = SessionToken.convertProto(protoSession);
		this.sessionToken = sessionToken;
		return sessionToken;
	}

	private async ensureSessionToken() {
		if (!this.sessionToken) {
			const sessionToken = await this.generateSessionToken();

			this.sessionToken = sessionToken;
		}

		return this.sessionToken;
	}

	private ensurePlayer(player?: Player) {
		if (player) {
			this.players = Array.of(player);
		} else {
			const defaultPlayer = new Player({
				id: "player-1",
				display_name: "Player",
			});
			this.players = Array.of(defaultPlayer);
		}
		return this.players;
	}

	private validate() {
		if (!this.stream) {
			throw Error("Connection does not exist.");
		}

		if (!this.isActive()) {
			throw Error("Connection is not ready.");
		}

		if (!this.sessionToken) {
			throw Error("Session token is null.");
		}
	}
}
