// @generated by protoc-gen-es v1.10.0
// @generated from file spawner/channel/v1/channel.proto (package spawner.channel.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Actor } from "../../actor/v1/actor_pb.js";

/**
 * @generated from enum spawner.channel.v1.ChannelControllerType
 */
export declare enum ChannelControllerType {
  /**
   * @generated from enum value: CHANNEL_CONTROLLER_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Indicates creating a channel.
   *
   * @generated from enum value: CHANNEL_CONTROLLER_TYPE_CREATE = 1;
   */
  CREATE = 1,

  /**
   * Indicates leaving a channel.
   *
   * @generated from enum value: CHANNEL_CONTROLLER_TYPE_LEAVE = 2;
   */
  LEAVE = 2,
}

/**
 * @generated from message spawner.channel.v1.ChannelHost
 */
export declare class ChannelHost extends Message<ChannelHost> {
  /**
   * @generated from field: string session_id = 1;
   */
  sessionId: string;

  constructor(data?: PartialMessage<ChannelHost>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spawner.channel.v1.ChannelHost";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChannelHost;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChannelHost;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChannelHost;

  static equals(a: ChannelHost | PlainMessage<ChannelHost> | undefined, b: ChannelHost | PlainMessage<ChannelHost> | undefined): boolean;
}

/**
 * @generated from message spawner.channel.v1.ChannelMember
 */
export declare class ChannelMember extends Message<ChannelMember> {
  /**
   * @generated from field: string session_id = 1;
   */
  sessionId: string;

  constructor(data?: PartialMessage<ChannelMember>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spawner.channel.v1.ChannelMember";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChannelMember;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChannelMember;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChannelMember;

  static equals(a: ChannelMember | PlainMessage<ChannelMember> | undefined, b: ChannelMember | PlainMessage<ChannelMember> | undefined): boolean;
}

/**
 * @generated from message spawner.channel.v1.ChannelController
 */
export declare class ChannelController extends Message<ChannelController> {
  /**
   * @generated from field: spawner.channel.v1.ChannelControllerType type = 1;
   */
  type: ChannelControllerType;

  /**
   * Output only. Indicates the channel identifier.
   *
   * @generated from field: string channel_id = 2;
   */
  channelId: string;

  /**
   * The session hosting the channel. The host session will be
   * the primary processor of requests sent to the channel.
   *
   * The host MUST always have the 'smallest' session id. Clients
   * may want to sort members by ascending order and designate the
   * first entity to be the host.
   *
   * @generated from field: spawner.channel.v1.ChannelHost host = 3;
   */
  host?: ChannelHost;

  /**
   * Indicates the member sessions of the channel. Should include
   * the channel host. Must be provided to create a channel.
   *
   * @generated from field: repeated spawner.channel.v1.ChannelMember members = 4;
   */
  members: ChannelMember[];

  /**
   * Indicates the actors within a channel. Must be provided
   * to create a channel.
   *
   * @generated from field: spawner.actor.v1.Actor actor = 5;
   */
  actor?: Actor;

  constructor(data?: PartialMessage<ChannelController>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spawner.channel.v1.ChannelController";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChannelController;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChannelController;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChannelController;

  static equals(a: ChannelController | PlainMessage<ChannelController> | undefined, b: ChannelController | PlainMessage<ChannelController> | undefined): boolean;
}

