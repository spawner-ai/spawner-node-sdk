// @generated by protoc-gen-es v2.2.0 with parameter "target=ts"
// @generated from file spawner/channel/v1/channel.proto (package spawner.channel.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Actor, CharacterMutationEvent } from "../../actor/v1/actor_pb";
import { file_spawner_actor_v1_actor } from "../../actor/v1/actor_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file spawner/channel/v1/channel.proto.
 */
export const file_spawner_channel_v1_channel: GenFile = /*@__PURE__*/
  fileDesc("CiBzcGF3bmVyL2NoYW5uZWwvdjEvY2hhbm5lbC5wcm90bxISc3Bhd25lci5jaGFubmVsLnYxIloKHlJlcGVhdGVkQ2hhcmFjdGVyTXV0YXRpb25FdmVudBI4CgZldmVudHMYASADKAsyKC5zcGF3bmVyLmFjdG9yLnYxLkNoYXJhY3Rlck11dGF0aW9uRXZlbnQipgEKFENoYW5uZWxNdXRhdGlvbkV2ZW50EjoKBHR5cGUYASABKA4yLC5zcGF3bmVyLmNoYW5uZWwudjEuQ2hhbm5lbE11dGF0aW9uRXZlbnRUeXBlEkcKCWNoYXJhY3RlchgCIAEoCzIyLnNwYXduZXIuY2hhbm5lbC52MS5SZXBlYXRlZENoYXJhY3Rlck11dGF0aW9uRXZlbnRIAEIJCgdwYXlsb2FkIiEKC0NoYW5uZWxIb3N0EhIKCnNlc3Npb25faWQYASABKAkiIwoNQ2hhbm5lbE1lbWJlchISCgpzZXNzaW9uX2lkGAEgASgJIr4CChFDaGFubmVsQ29udHJvbGxlchI3CgR0eXBlGAEgASgOMikuc3Bhd25lci5jaGFubmVsLnYxLkNoYW5uZWxDb250cm9sbGVyVHlwZRISCgpjaGFubmVsX2lkGAIgASgJEi0KBGhvc3QYAyABKAsyHy5zcGF3bmVyLmNoYW5uZWwudjEuQ2hhbm5lbEhvc3QSMgoHbWVtYmVycxgEIAMoCzIhLnNwYXduZXIuY2hhbm5lbC52MS5DaGFubmVsTWVtYmVyEiYKBWFjdG9yGAUgASgLMhcuc3Bhd25lci5hY3Rvci52MS5BY3RvchI+CghtdXRhdGlvbhgGIAEoCzIoLnNwYXduZXIuY2hhbm5lbC52MS5DaGFubmVsTXV0YXRpb25FdmVudEICGAESEQoJc2NlbmVfa2V5GAcgASgJKqsBChVDaGFubmVsQ29udHJvbGxlclR5cGUSJwojQ0hBTk5FTF9DT05UUk9MTEVSX1RZUEVfVU5TUEVDSUZJRUQQABIiCh5DSEFOTkVMX0NPTlRST0xMRVJfVFlQRV9DUkVBVEUQARIhCh1DSEFOTkVMX0NPTlRST0xMRVJfVFlQRV9MRUFWRRACEiIKHkNIQU5ORUxfQ09OVFJPTExFUl9UWVBFX01VVEFURRADKnIKGENoYW5uZWxNdXRhdGlvbkV2ZW50VHlwZRIrCidDSEFOTkVMX01VVEFUSU9OX0VWRU5UX1RZUEVfVU5TUEVDSUZJRUQQABIpCiVDSEFOTkVMX01VVEFUSU9OX0VWRU5UX1RZUEVfQ0hBUkFDVEVSEAFCkAEKFmNvbS5zcGF3bmVyLmNoYW5uZWwudjFCDENoYW5uZWxQcm90b1ABogIDU0NYqgISU3Bhd25lci5DaGFubmVsLlYxygISU3Bhd25lclxDaGFubmVsXFYx4gIeU3Bhd25lclxDaGFubmVsXFYxXEdQQk1ldGFkYXRh6gIUU3Bhd25lcjo6Q2hhbm5lbDo6VjFiBnByb3RvMw", [file_spawner_actor_v1_actor]);

/**
 * Deprecated.
 *
 * @generated from message spawner.channel.v1.RepeatedCharacterMutationEvent
 */
export type RepeatedCharacterMutationEvent = Message<"spawner.channel.v1.RepeatedCharacterMutationEvent"> & {
  /**
   * @generated from field: repeated spawner.actor.v1.CharacterMutationEvent events = 1;
   */
  events: CharacterMutationEvent[];
};

/**
 * Describes the message spawner.channel.v1.RepeatedCharacterMutationEvent.
 * Use `create(RepeatedCharacterMutationEventSchema)` to create a new message.
 */
export const RepeatedCharacterMutationEventSchema: GenMessage<RepeatedCharacterMutationEvent> = /*@__PURE__*/
  messageDesc(file_spawner_channel_v1_channel, 0);

/**
 * Deprecated.
 *
 * @generated from message spawner.channel.v1.ChannelMutationEvent
 */
export type ChannelMutationEvent = Message<"spawner.channel.v1.ChannelMutationEvent"> & {
  /**
   * @generated from field: spawner.channel.v1.ChannelMutationEventType type = 1;
   */
  type: ChannelMutationEventType;

  /**
   * @generated from oneof spawner.channel.v1.ChannelMutationEvent.payload
   */
  payload: {
    /**
     * @generated from field: spawner.channel.v1.RepeatedCharacterMutationEvent character = 2;
     */
    value: RepeatedCharacterMutationEvent;
    case: "character";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message spawner.channel.v1.ChannelMutationEvent.
 * Use `create(ChannelMutationEventSchema)` to create a new message.
 */
export const ChannelMutationEventSchema: GenMessage<ChannelMutationEvent> = /*@__PURE__*/
  messageDesc(file_spawner_channel_v1_channel, 1);

/**
 * @generated from message spawner.channel.v1.ChannelHost
 */
export type ChannelHost = Message<"spawner.channel.v1.ChannelHost"> & {
  /**
   * @generated from field: string session_id = 1;
   */
  sessionId: string;
};

/**
 * Describes the message spawner.channel.v1.ChannelHost.
 * Use `create(ChannelHostSchema)` to create a new message.
 */
export const ChannelHostSchema: GenMessage<ChannelHost> = /*@__PURE__*/
  messageDesc(file_spawner_channel_v1_channel, 2);

/**
 * @generated from message spawner.channel.v1.ChannelMember
 */
export type ChannelMember = Message<"spawner.channel.v1.ChannelMember"> & {
  /**
   * @generated from field: string session_id = 1;
   */
  sessionId: string;
};

/**
 * Describes the message spawner.channel.v1.ChannelMember.
 * Use `create(ChannelMemberSchema)` to create a new message.
 */
export const ChannelMemberSchema: GenMessage<ChannelMember> = /*@__PURE__*/
  messageDesc(file_spawner_channel_v1_channel, 3);

/**
 * @generated from message spawner.channel.v1.ChannelController
 */
export type ChannelController = Message<"spawner.channel.v1.ChannelController"> & {
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

  /**
   * Input only. `type` field must be set to `CREATE` or `MUTATE`. Note that if
   * type if `CREATE`, the mutation happens immediately after the channel is
   * initialized.
   *
   * @generated from field: spawner.channel.v1.ChannelMutationEvent mutation = 6 [deprecated = true];
   * @deprecated
   */
  mutation?: ChannelMutationEvent;

  /**
   * Input only. Provides a way to have different `channel_id`s when all other
   * variables are unchanged.
   *
   * For example, when the user wants to create a channel, the channel id will
   * be equivalent when the same values are passed. The user may want to create
   * a separate channel, even if these values are the same. (e.g. a separate
   * scene, location, etc.)
   *
   * `scene_key` can be interpreted as a seed value to predictably randomize the
   * `channel_id`.
   *
   * @generated from field: string scene_key = 7;
   */
  sceneKey: string;
};

/**
 * Describes the message spawner.channel.v1.ChannelController.
 * Use `create(ChannelControllerSchema)` to create a new message.
 */
export const ChannelControllerSchema: GenMessage<ChannelController> = /*@__PURE__*/
  messageDesc(file_spawner_channel_v1_channel, 4);

/**
 * @generated from enum spawner.channel.v1.ChannelControllerType
 */
export enum ChannelControllerType {
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

  /**
   * Indicates a channel mutation.
   *
   * @generated from enum value: CHANNEL_CONTROLLER_TYPE_MUTATE = 3;
   */
  MUTATE = 3,
}

/**
 * Describes the enum spawner.channel.v1.ChannelControllerType.
 */
export const ChannelControllerTypeSchema: GenEnum<ChannelControllerType> = /*@__PURE__*/
  enumDesc(file_spawner_channel_v1_channel, 0);

/**
 * @generated from enum spawner.channel.v1.ChannelMutationEventType
 */
export enum ChannelMutationEventType {
  /**
   * @generated from enum value: CHANNEL_MUTATION_EVENT_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Set for character mutations.
   *
   * @generated from enum value: CHANNEL_MUTATION_EVENT_TYPE_CHARACTER = 1;
   */
  CHARACTER = 1,
}

/**
 * Describes the enum spawner.channel.v1.ChannelMutationEventType.
 */
export const ChannelMutationEventTypeSchema: GenEnum<ChannelMutationEventType> = /*@__PURE__*/
  enumDesc(file_spawner_channel_v1_channel, 1);

