import { type CallOptions, type PromiseClient, createPromiseClient } from "@connectrpc/connect";
import { createGrpcTransport } from "@connectrpc/connect-node";
import { type WritableIterable, createWritableIterable } from "@connectrpc/connect/protocol";
import { create } from "@bufbuild/protobuf";

import { GenerateSessionTokenRequestSchema, MainService } from "../../proto/spawner/main/v1/main_pb";
import { MainServiceType } from "../common/types";
import { type FeatureConfiguration } from "../../proto/spawner/main/v1/main_pb";
import { SpawnerPacketSchema, SpawnerPacket as ProtoPacket, SpawnerPacketType } from "../../proto/spawner/packet/v1/packet_pb";
import type { ConnectionConfig } from "../common/types";
import { ActorSchema, AgentActorSchema, PlayerActorSchema } from "../../proto/spawner/actor/v1/actor_pb";
import {
	ChannelController,
	ChannelControllerSchema,
	ChannelControllerType,
	ChannelHostSchema,
	ChannelMemberSchema,
} from "../../proto/spawner/channel/v1/channel_pb";
import { LanguageCode } from "../../proto/spawner/language_code/v1/language_code_pb";
import { CreateWorldEventSchema, WorldControllerSchema, WorldControllerType, WorldController, CreateWorldEvent, AgentConfigurationSchema, AgentCharacterSchema } from "../../proto/spawner/world/v1/world_pb";

import type { ConnectionError } from "../common/types";
import type { Character } from "../entities/character.entity";
import { PacketError } from "../entities/packets/error.entity";
import { SpawnerPacket } from "../entities/packets/spawner_packet.entity";
import type { Player } from "../entities/player.entity";
import type { SessionToken } from "../entities/session_token.entity";
import { World } from "../entities/world.entity";

interface OpenSessionProps {
	sessionToken: SessionToken;
	characters: Character[];
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
		const client = createPromiseClient(
			MainService,
			createGrpcTransport({
				httpVersion: "2",
				baseUrl: `http://${hostname}`,
			}),
		);
		return client;
	}

	async openSession(props: OpenSessionProps): Promise<[WritableIterable<ProtoPacket>, World]> {
		const { sessionToken, characters, onMessage, onError, onClose } = props;

		const connection = createWritableIterable<ProtoPacket>();
		const options = this.getOptions(sessionToken);
		const responses = this.client.connectSession(connection, options);

    // deprecated function
		// const loadedScene = await this.loadScene(sessionToken, scene);
    
    const createdWorld = await this.createWorld(sessionToken, characters);
    const world = World.convertProto(createdWorld)

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
			}
		};

		processResponses();

		return Promise.resolve([connection, world]);
	}

	async openChannel(sessionToken: SessionToken, players: Player[], characters: Character[]) {

    console.log('characters:',characters)
    const host = create(ChannelHostSchema, {
      sessionId: sessionToken.sessionId,
    });

    const members = [create(ChannelMemberSchema, {
      sessionId: sessionToken.sessionId,
    })]

    const actor = create(ActorSchema, {
			players: players.map(p => 
        create(PlayerActorSchema, {
          id: p.id, displayName: p.display_name
        })
    ),
			agents: characters.map(c => 
        create(AgentActorSchema, {
          id: c.agent?.id
        })
      )
		})

    const channelController = create(ChannelControllerSchema, {
      type: ChannelControllerType.CREATE,
			host,
			members,
			actor,
    })

    const packet = create(SpawnerPacketSchema, {
      type: SpawnerPacketType.CHANNEL_CONTROLLER,
			payload: {
				case: "channelController",
				value: channelController,
			},
    })

		const options = this.getOptions(sessionToken);

		const channelPacket = await this.client.openChannel(packet, options);

		const channel = channelPacket.payload.value as ChannelController;
    console.log('channel',channel.actor?.agents)
		return channel;
	}

	async generateSessionToken(props: GenerateSessionTokenProps) {
    const generateSessionTokenRequest = create(GenerateSessionTokenRequestSchema, {
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

  async createWorld(sessionToken: SessionToken, characters: Character[]){
    if (!sessionToken.token) {
			throw Error("Session token is not valid. Generate a session token before creating world.");
		}

    const agents = characters.map(c => (
      create(AgentConfigurationSchema, {
        id: c.agent?.id,
        blueprintId: c.agent?.blueprintId,
        displayName: c.agent?.displayName,
        character: create(AgentCharacterSchema, {
          customId: c.customId
        }),
        functions: c.agent?.functions,
        objective: c.agent?.objective
      })
    )
    )
    console.log(agents)

    const protoWorld = create(CreateWorldEventSchema, {
      agents
    })

    const worldController = create(WorldControllerSchema, {
      type: WorldControllerType.CREATE,
      payload: {
        value: protoWorld,
        case: "create"
      }
    })

    const packet = create(SpawnerPacketSchema, {
      type: SpawnerPacketType.WORLD,
      payload: {
        case: "worldController",
        value: worldController
      }
    })

    const options = this.getOptions(sessionToken);
    const worldPacket = await this.client.createWorld(packet, options);
    console.log(worldPacket)
    const packetWorldController = worldPacket.payload.value as WorldController
    console.log(packetWorldController)
    const createdWorld = packetWorldController.payload.value as CreateWorldEvent

    return createdWorld
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

  // deprecated
	// async loadScene(sessionToken: SessionToken, scene?: Scene) {
	// 	if (!sessionToken.token) {
	// 		throw Error("Session token is not valid. Generate a session token before loading scene.");
	// 	}

  //   const protoScene = create(ProtoSceneSchema, {
  //     customId: scene?.id,
	// 		description: scene?.description,
  //   })

  //   const sessionController = create(SessionControllerSchema, {
  //     type: SessionControllerType.LOAD,
	// 		payload: {
	// 			value: protoScene,
	// 			case: "scene",
	// 		},
  //   })

  //   const packet = create(SpawnerPacketSchema, {
  //     type: SpawnerPacketType.SESSION_CONTROLLER,
	// 		payload: {
	// 			case: "sessionController",
	// 			value: sessionController,
	// 		},
  //   })

	// 	const options = this.getOptions(sessionToken);

	// 	const loadedScenePacket = await this.client.loadScene(packet, options);

	// 	const loadSceneSessionController = loadedScenePacket.payload.value as SessionController;
	// 	const loadedScene = loadSceneSessionController.payload.value as ProtoScene;
	// 	return loadedScene;
	// }
}
