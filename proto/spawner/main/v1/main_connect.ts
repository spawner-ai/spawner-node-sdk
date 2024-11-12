// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts"
// @generated from file spawner/main/v1/main.proto (package spawner.main.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GenerateSessionTokenRequest, GenerateSessionTokenResponse, GetSessionRequest, GetSessionResponse, LeaveChannelRequest, LeaveChannelResponse, RefreshSessionTokenRequest, RefreshSessionTokenResponse } from "./main_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { SpawnerPacket } from "../../packet/v1/packet_pb.js";

/**
 * @generated from service spawner.main.v1.MainService
 */
export const MainService = {
  typeName: "spawner.main.v1.MainService",
  methods: {
    /**
     * Generates a JWT to access the API with a given API key and secret.
     * Initializes session record and loads workspace data to Redis.
     *
     * @generated from rpc spawner.main.v1.MainService.GenerateSessionToken
     */
    generateSessionToken: {
      name: "GenerateSessionToken",
      I: GenerateSessionTokenRequest,
      O: GenerateSessionTokenResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Returns session token from a refresh token.
     *
     * @generated from rpc spawner.main.v1.MainService.RefreshSessionToken
     */
    refreshSessionToken: {
      name: "RefreshSessionToken",
      I: RefreshSessionTokenRequest,
      O: RefreshSessionTokenResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Gets session for passed identifier.
     *
     * @generated from rpc spawner.main.v1.MainService.GetSession
     */
    getSession: {
      name: "GetSession",
      I: GetSessionRequest,
      O: GetSessionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Deprecated. Loads scene to a session. Accepts adhoc scenes.
     *
     * @generated from rpc spawner.main.v1.MainService.LoadScene
     * @deprecated
     */
    loadScene: {
      name: "LoadScene",
      I: SpawnerPacket,
      O: SpawnerPacket,
      kind: MethodKind.Unary,
    },
    /**
     * Create a world initialized with agents.
     *
     * @generated from rpc spawner.main.v1.MainService.CreateWorld
     */
    createWorld: {
      name: "CreateWorld",
      I: SpawnerPacket,
      O: SpawnerPacket,
      kind: MethodKind.Unary,
    },
    /**
     * Handles session specific processes.
     *
     * @generated from rpc spawner.main.v1.MainService.ConnectSession
     */
    connectSession: {
      name: "ConnectSession",
      I: SpawnerPacket,
      O: SpawnerPacket,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * Opens a channel with initial values.
     *
     * @generated from rpc spawner.main.v1.MainService.OpenChannel
     */
    openChannel: {
      name: "OpenChannel",
      I: SpawnerPacket,
      O: SpawnerPacket,
      kind: MethodKind.Unary,
    },
    /**
     * Leaves current channel the session is subscribed to.
     *
     * @generated from rpc spawner.main.v1.MainService.LeaveChannel
     */
    leaveChannel: {
      name: "LeaveChannel",
      I: LeaveChannelRequest,
      O: LeaveChannelResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

