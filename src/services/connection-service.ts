import type { WritableIterable } from "@connectrpc/connect/protocol";
import { create } from "@bufbuild/protobuf";
import { FeatureConfigurationSchema } from "../../proto/spawner/main/v1/main_pb";
import {
	SpawnerPacket as ProtoPacket,
	SpawnerPacketSchema,
	SpawnerPacketType,
} from "../../proto/spawner/packet/v1/packet_pb";
import { EventActorSchema, EventActorType, EventAgentSchema, EventPlayerSchema, RoutingSchema } from "../../proto/spawner/routing/v1/routing_pb";
import type {
	ApiKey,
	ConnectionConfig,
	Accessor,
	ConnectionError,
} from "../common/types";
import { ConnectionState } from "../common/types";
import { Channel } from "../entities/channel.entity";
import { Character } from "../entities/character.entity";
import type { SpawnerPacket } from "../entities/packets/spawner_packet.entity";
import { Player } from "../entities/player.entity";
import { SessionToken } from "../entities/session_token.entity";
import { SpawnerMainService } from "./main-service";
import { TextEventSchema } from "../../proto/spawner/text/v1/text_pb";
import { World } from "../entities/world.entity";

interface ConnectionProps {
	config: ConnectionConfig;
	apiKey: ApiKey;
	workspaceId: string;
	player?: Player;
  characters?: Character[];
	sessionAccessor?: Accessor<SessionToken>;
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
	private channel: Channel | undefined;
	private players: Player[];
  private world: World | undefined;

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
				onMessage?.(packet);
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

		let session: SessionToken | undefined;
		if (this.connectionProps.sessionAccessor) {
			session = await this.connectionProps.sessionAccessor.get();
		}

		const prevSessionToken = this.sessionToken;
		await this.ensureSessionToken(session);

		if (!this.sessionToken) return;

		if (prevSessionToken !== this.sessionToken) {
			this.connectionProps.sessionAccessor?.set(this.sessionToken);
		}

    if(!this.connectionProps.characters){
      throw Error("The character to be given to the world is empty or undefined.")
    }

		const [stream, world] = await this.mainService.openSession({
			sessionToken: this.sessionToken,
			characters: this.connectionProps.characters,
			onMessage: this.onMessage,
			onError: this.onError,
			onClose: this.onClose,
		});

    this.world = world;

		this.stream = stream;
		this.state = ConnectionState.ACTIVE;
		console.log("Connection is active. You are ready to open the channel.");

    if(this.isActive()){
      const characters = world.agents.map(agent => (
        Character.convertProto(agent)
      ))
      const channel = await this.mainService.openChannel(
        this.sessionToken,
        this.players,
        characters
      );
      this.channel = Channel.convertProto(channel);
    }
	}

	close() {
		this.state = ConnectionState.INACTIVE;
		this.stream.close();
		this.onClose?.();
	}

	isActive() {
		return this.state === ConnectionState.ACTIVE;
	}

  getStream(){
    if(!this.isActive()) return
    return this.stream;
  }

	getConnectionState() {
		return this.state;
	}

	async sendText(text: string) {
		this.validate();

		const textEvent = create(TextEventSchema, {
			utteranceId: "utterance_id",
			text,
		});

    const eventPlayer = create(EventPlayerSchema, {
      id: this.players[0].id,
    })

    const eventAgent = create(EventAgentSchema, {
      id: this.world?.agents[0].id,
    })

    const source = create(EventActorSchema, {
      type: EventActorType.PLAYER,
      payload: {
        case: "player",
        value: eventPlayer
      }
    })

    const target = create(EventActorSchema, {
      type: EventActorType.AGENT,
      payload: {
        case: "agent",
        value: eventAgent
      }
    })

    const routing = create(RoutingSchema, {
      source,
      target
    })

		const packet = create(SpawnerPacketSchema, {
      type: SpawnerPacketType.TEXT,
			routing,
			payload: {
				case: "text",
				value: textEvent,
			}
    }) 

		await this.stream.write(packet);
	}

	async generateSessionToken() {
		const { feature } = this.connectionProps.config
    const featureConfiguration = create(FeatureConfigurationSchema, feature)
		const protoSession = await this.mainService.generateSessionToken({
			apiKey: this.connectionProps.apiKey.key,
			apiSecret: this.connectionProps.apiKey.secret,
			workspaceId: this.connectionProps.workspaceId,
			playerId: this.players[0].id,
			featureConfiguration,
		});

		const sessionToken = SessionToken.convertProto(protoSession);
		this.sessionToken = sessionToken;
		return sessionToken;
	}

	private async ensureSessionToken(session?: SessionToken) {
		let sessionToken = session ?? this.sessionToken;

		if (!sessionToken || SessionToken.isExpired(sessionToken)) {
			sessionToken = await this.generateSessionToken();
		}

		this.sessionToken = sessionToken;

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
			throw Error("Session token is undefined.");
		}
	}
}
