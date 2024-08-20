
import { GenService } from "@bufbuild/protobuf/codegenv1";
import { 
  GenerateSessionTokenRequestSchema,
  GenerateSessionTokenResponseSchema,
  RefreshSessionTokenRequestSchema,
  RefreshSessionTokenResponseSchema,
  GetSessionRequestSchema,
  GetSessionResponseSchema,
  LeaveChannelRequestSchema,
  LeaveChannelResponseSchema
 } from "../../proto/spawner/main/v1/main_pb";
 import type { SpawnerPacketSchema } from "../../proto/spawner/packet/v1/packet_pb"
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

export type MainServiceType = GenService<{
  generateSessionToken: {
    methodKind: "unary";
    input: typeof GenerateSessionTokenRequestSchema;
    output: typeof GenerateSessionTokenResponseSchema;
  };
  /**
   * Returns session token from a refresh token.
   *
   * @generated from rpc spawner.main.v1.MainService.RefreshSessionToken
   */
  refreshSessionToken: {
    methodKind: "unary";
    input: typeof RefreshSessionTokenRequestSchema;
    output: typeof RefreshSessionTokenResponseSchema;
  };
  /**
   * Gets session for passed identifier.
   *
   * @generated from rpc spawner.main.v1.MainService.GetSession
   */
  getSession: {
    methodKind: "unary";
    input: typeof GetSessionRequestSchema;
    output: typeof GetSessionResponseSchema;
  };
  /**
   * Loads scene to a session. Accepts adhoc scenes.
   *
   * @generated from rpc spawner.main.v1.MainService.LoadScene
   */
  loadScene: {
    methodKind: "unary";
    input: typeof SpawnerPacketSchema;
    output: typeof SpawnerPacketSchema;
  };
  /**
   * Handles session specific processes.
   *
   * @generated from rpc spawner.main.v1.MainService.ConnectSession
   */
  connectSession: {
    methodKind: "bidi_streaming";
    input: typeof SpawnerPacketSchema;
    output: typeof SpawnerPacketSchema;
  };
  /**
   * Opens a channel with initial values.
   *
   * @generated from rpc spawner.main.v1.MainService.OpenChannel
   */
  openChannel: {
    methodKind: "unary";
    input: typeof SpawnerPacketSchema;
    output: typeof SpawnerPacketSchema;
  };
  /**
   * Leaves current channel the session is subscribed to.
   *
   * @generated from rpc spawner.main.v1.MainService.LeaveChannel
   */
  leaveChannel: {
    methodKind: "unary";
    input: typeof LeaveChannelRequestSchema;
    output: typeof LeaveChannelResponseSchema;
  };
}>