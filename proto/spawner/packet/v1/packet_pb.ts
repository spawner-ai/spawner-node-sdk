// @generated by protoc-gen-es v2.2.0 with parameter "target=ts"
// @generated from file spawner/packet/v1/packet.proto (package spawner.packet.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { AgentEvent } from "../../agent/v1/agent_pb";
import { file_spawner_agent_v1_agent } from "../../agent/v1/agent_pb";
import type { ChannelController } from "../../channel/v1/channel_pb";
import { file_spawner_channel_v1_channel } from "../../channel/v1/channel_pb";
import type { EmotionEvent } from "../../emotion/v1/emotion_pb";
import { file_spawner_emotion_v1_emotion } from "../../emotion/v1/emotion_pb";
import type { ErrorEvent } from "../../error/v1/error_pb";
import { file_spawner_error_v1_error } from "../../error/v1/error_pb";
import type { InputFilterEvent } from "../../input_filter/v1/input_filter_pb";
import { file_spawner_input_filter_v1_input_filter } from "../../input_filter/v1/input_filter_pb";
import type { KnowledgeEvent } from "../../knowledge/v1/knowledge_pb";
import { file_spawner_knowledge_v1_knowledge } from "../../knowledge/v1/knowledge_pb";
import type { PromptInjectionEvent } from "../../prompt_injection/v1/prompt_injection_pb";
import { file_spawner_prompt_injection_v1_prompt_injection } from "../../prompt_injection/v1/prompt_injection_pb";
import type { Routing } from "../../routing/v1/routing_pb";
import { file_spawner_routing_v1_routing } from "../../routing/v1/routing_pb";
import type { SentimentEvent } from "../../sentiment/v1/sentiment_pb";
import { file_spawner_sentiment_v1_sentiment } from "../../sentiment/v1/sentiment_pb";
import type { TextEvent } from "../../text/v1/text_pb";
import { file_spawner_text_v1_text } from "../../text/v1/text_pb";
import type { WorldController } from "../../world/v1/world_pb";
import { file_spawner_world_v1_world } from "../../world/v1/world_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file spawner/packet/v1/packet.proto.
 */
export const file_spawner_packet_v1_packet: GenFile = /*@__PURE__*/
  fileDesc("Ch5zcGF3bmVyL3BhY2tldC92MS9wYWNrZXQucHJvdG8SEXNwYXduZXIucGFja2V0LnYxIoUGCg1TcGF3bmVyUGFja2V0Ei0KCXRpbWVzdGFtcBgBIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASMgoEdHlwZRgCIAEoDjIkLnNwYXduZXIucGFja2V0LnYxLlNwYXduZXJQYWNrZXRUeXBlEiwKB3JvdXRpbmcYAyABKAsyGy5zcGF3bmVyLnJvdXRpbmcudjEuUm91dGluZxIPCgdzdWNjZXNzGAQgASgIEisKBWVycm9yGAUgASgLMhwuc3Bhd25lci5lcnJvci52MS5FcnJvckV2ZW50EkMKEmNoYW5uZWxfY29udHJvbGxlchgHIAEoCzIlLnNwYXduZXIuY2hhbm5lbC52MS5DaGFubmVsQ29udHJvbGxlckgAEioKBHRleHQYCCABKAsyGi5zcGF3bmVyLnRleHQudjEuVGV4dEV2ZW50SAASQQoMaW5wdXRfZmlsdGVyGAkgASgLMikuc3Bhd25lci5pbnB1dF9maWx0ZXIudjEuSW5wdXRGaWx0ZXJFdmVudEgAEjMKB2Vtb3Rpb24YCiABKAsyIC5zcGF3bmVyLmVtb3Rpb24udjEuRW1vdGlvbkV2ZW50SAASOQoJa25vd2xlZGdlGAsgASgLMiQuc3Bhd25lci5rbm93bGVkZ2UudjEuS25vd2xlZGdlRXZlbnRIABI5CglzZW50aW1lbnQYDCABKAsyJC5zcGF3bmVyLnNlbnRpbWVudC52MS5TZW50aW1lbnRFdmVudEgAEk0KEHByb21wdF9pbmplY3Rpb24YDSABKAsyMS5zcGF3bmVyLnByb21wdF9pbmplY3Rpb24udjEuUHJvbXB0SW5qZWN0aW9uRXZlbnRIABI9ChB3b3JsZF9jb250cm9sbGVyGA4gASgLMiEuc3Bhd25lci53b3JsZC52MS5Xb3JsZENvbnRyb2xsZXJIABItCgVhZ2VudBgPIAEoCzIcLnNwYXduZXIuYWdlbnQudjEuQWdlbnRFdmVudEgAQgkKB3BheWxvYWQqggMKEVNwYXduZXJQYWNrZXRUeXBlEiMKH1NQQVdORVJfUEFDS0VUX1RZUEVfVU5TUEVDSUZJRUQQABIqCiZTUEFXTkVSX1BBQ0tFVF9UWVBFX0NIQU5ORUxfQ09OVFJPTExFUhACEhwKGFNQQVdORVJfUEFDS0VUX1RZUEVfVEVYVBADEiQKIFNQQVdORVJfUEFDS0VUX1RZUEVfSU5QVVRfRklMVEVSEAQSHwobU1BBV05FUl9QQUNLRVRfVFlQRV9FTU9USU9OEAUSIQodU1BBV05FUl9QQUNLRVRfVFlQRV9LTk9XTEVER0UQBhIhCh1TUEFXTkVSX1BBQ0tFVF9UWVBFX1NFTlRJTUVOVBAHEigKJFNQQVdORVJfUEFDS0VUX1RZUEVfUFJPTVBUX0lOSkVDVElPThAIEigKJFNQQVdORVJfUEFDS0VUX1RZUEVfV09STERfQ09OVFJPTExFUhAJEh0KGVNQQVdORVJfUEFDS0VUX1RZUEVfQUdFTlQQCkKKAQoVY29tLnNwYXduZXIucGFja2V0LnYxQgtQYWNrZXRQcm90b1ABogIDU1BYqgIRU3Bhd25lci5QYWNrZXQuVjHKAhFTcGF3bmVyXFBhY2tldFxWMeICHVNwYXduZXJcUGFja2V0XFYxXEdQQk1ldGFkYXRh6gITU3Bhd25lcjo6UGFja2V0OjpWMWIGcHJvdG8z", [file_google_protobuf_timestamp, file_spawner_agent_v1_agent, file_spawner_channel_v1_channel, file_spawner_emotion_v1_emotion, file_spawner_error_v1_error, file_spawner_input_filter_v1_input_filter, file_spawner_knowledge_v1_knowledge, file_spawner_prompt_injection_v1_prompt_injection, file_spawner_routing_v1_routing, file_spawner_sentiment_v1_sentiment, file_spawner_text_v1_text, file_spawner_world_v1_world]);

/**
 * @generated from message spawner.packet.v1.SpawnerPacket
 */
export type SpawnerPacket = Message<"spawner.packet.v1.SpawnerPacket"> & {
  /**
   * Output only.
   *
   * @generated from field: google.protobuf.Timestamp timestamp = 1;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: spawner.packet.v1.SpawnerPacketType type = 2;
   */
  type: SpawnerPacketType;

  /**
   * Indicates routing of the event. For example, the source actor
   * and the target actor of the event.
   *
   * @generated from field: spawner.routing.v1.Routing routing = 3;
   */
  routing?: Routing;

  /**
   * Output only. Sets to True if the requested operation has
   * been fulfilled.
   *
   * @generated from field: bool success = 4;
   */
  success: boolean;

  /**
   * Output only. The field is only populated on error.
   *
   * @generated from field: spawner.error.v1.ErrorEvent error = 5;
   */
  error?: ErrorEvent;

  /**
   * removed: 6
   *
   * @generated from oneof spawner.packet.v1.SpawnerPacket.payload
   */
  payload: {
    /**
     * Controls channel creation and state.
     *
     * @generated from field: spawner.channel.v1.ChannelController channel_controller = 7;
     */
    value: ChannelController;
    case: "channelController";
  } | {
    /**
     * Text generation input/output. Streams output text per token.
     *
     * @generated from field: spawner.text.v1.TextEvent text = 8;
     */
    value: TextEvent;
    case: "text";
  } | {
    /**
     * Output only. Returns a value when the text input is flagged.
     *
     * @generated from field: spawner.input_filter.v1.InputFilterEvent input_filter = 9;
     */
    value: InputFilterEvent;
    case: "inputFilter";
  } | {
    /**
     * Output only. Indicates the emotion values for the target character.
     *
     * @generated from field: spawner.emotion.v1.EmotionEvent emotion = 10;
     */
    value: EmotionEvent;
    case: "emotion";
  } | {
    /**
     * Output only. Indicates the knowledge referenced during text generation.
     *
     * @generated from field: spawner.knowledge.v1.KnowledgeEvent knowledge = 11;
     */
    value: KnowledgeEvent;
    case: "knowledge";
  } | {
    /**
     * Ouput only. Indicates the sentiment of the character.
     *
     * @generated from field: spawner.sentiment.v1.SentimentEvent sentiment = 12;
     */
    value: SentimentEvent;
    case: "sentiment";
  } | {
    /**
     * Output only. Indicates the result of prompt injection detector.
     *
     * @generated from field: spawner.prompt_injection.v1.PromptInjectionEvent prompt_injection = 13;
     */
    value: PromptInjectionEvent;
    case: "promptInjection";
  } | {
    /**
     * Controls world agents.
     *
     * @generated from field: spawner.world.v1.WorldController world_controller = 14;
     */
    value: WorldController;
    case: "worldController";
  } | {
    /**
     * Agent event input/output.
     *
     * @generated from field: spawner.agent.v1.AgentEvent agent = 15;
     */
    value: AgentEvent;
    case: "agent";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message spawner.packet.v1.SpawnerPacket.
 * Use `create(SpawnerPacketSchema)` to create a new message.
 */
export const SpawnerPacketSchema: GenMessage<SpawnerPacket> = /*@__PURE__*/
  messageDesc(file_spawner_packet_v1_packet, 0);

/**
 * @generated from enum spawner.packet.v1.SpawnerPacketType
 */
export enum SpawnerPacketType {
  /**
   * @generated from enum value: SPAWNER_PACKET_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * removed: 1
   *
   * @generated from enum value: SPAWNER_PACKET_TYPE_CHANNEL_CONTROLLER = 2;
   */
  CHANNEL_CONTROLLER = 2,

  /**
   * @generated from enum value: SPAWNER_PACKET_TYPE_TEXT = 3;
   */
  TEXT = 3,

  /**
   * @generated from enum value: SPAWNER_PACKET_TYPE_INPUT_FILTER = 4;
   */
  INPUT_FILTER = 4,

  /**
   * @generated from enum value: SPAWNER_PACKET_TYPE_EMOTION = 5;
   */
  EMOTION = 5,

  /**
   * @generated from enum value: SPAWNER_PACKET_TYPE_KNOWLEDGE = 6;
   */
  KNOWLEDGE = 6,

  /**
   * @generated from enum value: SPAWNER_PACKET_TYPE_SENTIMENT = 7;
   */
  SENTIMENT = 7,

  /**
   * @generated from enum value: SPAWNER_PACKET_TYPE_PROMPT_INJECTION = 8;
   */
  PROMPT_INJECTION = 8,

  /**
   * @generated from enum value: SPAWNER_PACKET_TYPE_WORLD_CONTROLLER = 9;
   */
  WORLD_CONTROLLER = 9,

  /**
   * @generated from enum value: SPAWNER_PACKET_TYPE_AGENT = 10;
   */
  AGENT = 10,
}

/**
 * Describes the enum spawner.packet.v1.SpawnerPacketType.
 */
export const SpawnerPacketTypeSchema: GenEnum<SpawnerPacketType> = /*@__PURE__*/
  enumDesc(file_spawner_packet_v1_packet, 0);

