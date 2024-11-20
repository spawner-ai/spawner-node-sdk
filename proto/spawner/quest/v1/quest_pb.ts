// @generated by protoc-gen-es v2.2.0 with parameter "target=ts"
// @generated from file spawner/quest/v1/quest.proto (package spawner.quest.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file spawner/quest/v1/quest.proto.
 */
export const file_spawner_quest_v1_quest: GenFile = /*@__PURE__*/
  fileDesc("ChxzcGF3bmVyL3F1ZXN0L3YxL3F1ZXN0LnByb3RvEhBzcGF3bmVyLnF1ZXN0LnYxIosBCgpRdWVzdEV2ZW50Ei4KBHR5cGUYASABKA4yIC5zcGF3bmVyLnF1ZXN0LnYxLlF1ZXN0RXZlbnRUeXBlEgwKBG5hbWUYAiABKAkSEQoJY3VzdG9tX2lkGAMgASgJEhcKD2lzc3Vlcl9hZ2VudF9pZBgEIAEoCRITCgtmbGF2b3JfdGV4dBgFIAEoCSpPCg5RdWVzdEV2ZW50VHlwZRIgChxRVUVTVF9FVkVOVF9UWVBFX1VOU1BFQ0lGSUVEEAASGwoXUVVFU1RfRVZFTlRfVFlQRV9JTlZPS0UQAUKEAQoUY29tLnNwYXduZXIucXVlc3QudjFCClF1ZXN0UHJvdG9QAaICA1NRWKoCEFNwYXduZXIuUXVlc3QuVjHKAhBTcGF3bmVyXFF1ZXN0XFYx4gIcU3Bhd25lclxRdWVzdFxWMVxHUEJNZXRhZGF0YeoCElNwYXduZXI6OlF1ZXN0OjpWMWIGcHJvdG8z");

/**
 * Only output. Quests may be generated depending on the objective,
 * observations, and FOV of the agent. Assumes that quests are implemented on
 * the client-side, and triggered by this event.
 *
 * @generated from message spawner.quest.v1.QuestEvent
 */
export type QuestEvent = Message<"spawner.quest.v1.QuestEvent"> & {
  /**
   * @generated from field: spawner.quest.v1.QuestEventType type = 1;
   */
  type: QuestEventType;

  /**
   * Relative resource path.
   * Format: `workspaces:{workspace_id}:quests:{quest_id}`
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * Indicates the custom identifier of the quest.
   *
   * @generated from field: string custom_id = 3;
   */
  customId: string;

  /**
   * The agent id of the quest was issued by.
   *
   * @generated from field: string issuer_agent_id = 4;
   */
  issuerAgentId: string;

  /**
   * Flavor text to supplement the quest.
   *
   * @generated from field: string flavor_text = 5;
   */
  flavorText: string;
};

/**
 * Describes the message spawner.quest.v1.QuestEvent.
 * Use `create(QuestEventSchema)` to create a new message.
 */
export const QuestEventSchema: GenMessage<QuestEvent> = /*@__PURE__*/
  messageDesc(file_spawner_quest_v1_quest, 0);

/**
 * @generated from enum spawner.quest.v1.QuestEventType
 */
export enum QuestEventType {
  /**
   * @generated from enum value: QUEST_EVENT_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * An invoke event indicates that the agent has generated a potential quest.
   *
   * @generated from enum value: QUEST_EVENT_TYPE_INVOKE = 1;
   */
  INVOKE = 1,
}

/**
 * Describes the enum spawner.quest.v1.QuestEventType.
 */
export const QuestEventTypeSchema: GenEnum<QuestEventType> = /*@__PURE__*/
  enumDesc(file_spawner_quest_v1_quest, 0);

