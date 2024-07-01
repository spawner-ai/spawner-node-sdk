import type { MethodKind } from "@bufbuild/protobuf";
import type {
	GenerateSessionTokenRequest,
	GenerateSessionTokenResponse,
	GetSessionRequest,
	GetSessionResponse,
	LeaveChannelRequest,
	LeaveChannelResponse,
} from "../../proto/spawner/main/v1/main_pb";
import type { SpawnerPacket } from "../../proto/spawner/packet/v1/packet_pb.js";
import type { PacketError } from "../entities/packets/error.entity";

export interface ApiKey {
	key: string;
	secret: string;
}

export interface Gateway {
	hostname: string;
	ssl?: boolean;
}

export enum ConnectionState {
	ACTIVE = "ACTIVE",
	ACTIVATING = "ACTIVATING",
	INACTIVE = "INACTIVE",
}

export type Awaitable<T> = T | PromiseLike<T>;

export interface Accessor<T> {
  get: () => Awaitable<T | undefined>;
  set: (content: T) => Awaitable<void>;
}

export interface ConnectionConfig {
	gateway?: Gateway;
}

export type ConnectionError = Error | Event | PacketError | unknown;

export default interface MainServiceType {
	readonly typeName: "spawner.main.v1.MainService";
	readonly methods: {
		/**
		 * Generates a JWT to access the API with a given API key and secret.
		 * Initializes session record and loads workspace data to Redis.
		 *
		 * @generated from rpc spawner.main.v1.MainService.GenerateSessionToken
		 */
		readonly generateSessionToken: {
			readonly name: "GenerateSessionToken";
			readonly I: typeof GenerateSessionTokenRequest;
			readonly O: typeof GenerateSessionTokenResponse;
			readonly kind: MethodKind.Unary;
		};
		/**
		 * Gets session for passed identifier.
		 *
		 * @generated from rpc spawner.main.v1.MainService.GetSession
		 */
		readonly getSession: {
			readonly name: "GetSession";
			readonly I: typeof GetSessionRequest;
			readonly O: typeof GetSessionResponse;
			readonly kind: MethodKind.Unary;
		};
		/**
		 * Loads scene to a session. Accepts adhoc scenes.
		 *
		 * @generated from rpc spawner.main.v1.MainService.LoadScene
		 */
		readonly loadScene: {
			readonly name: "LoadScene";
			readonly I: typeof SpawnerPacket;
			readonly O: typeof SpawnerPacket;
			readonly kind: MethodKind.Unary;
		};
		/**
		 * Handles session specific processes.
		 *
		 * @generated from rpc spawner.main.v1.MainService.ConnectSession
		 */
		readonly connectSession: {
			readonly name: "ConnectSession";
			readonly I: typeof SpawnerPacket;
			readonly O: typeof SpawnerPacket;
			readonly kind: MethodKind.BiDiStreaming;
		};
		/**
		 * Opens a channel with initial values.
		 *
		 * @generated from rpc spawner.main.v1.MainService.OpenChannel
		 */
		readonly openChannel: {
			readonly name: "OpenChannel";
			readonly I: typeof SpawnerPacket;
			readonly O: typeof SpawnerPacket;
			readonly kind: MethodKind.Unary;
		};
		/**
		 * Leaves current channel the session is subscribed to.
		 *
		 * @generated from rpc spawner.main.v1.MainService.LeaveChannel
		 */
		readonly leaveChannel: {
			readonly name: "LeaveChannel";
			readonly I: typeof LeaveChannelRequest;
			readonly O: typeof LeaveChannelResponse;
			readonly kind: MethodKind.Unary;
		};
	};
}
