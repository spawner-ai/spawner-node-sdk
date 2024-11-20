// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file spawner/observation/v1/observation.proto (package spawner.observation.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file spawner/observation/v1/observation.proto.
 */
export const file_spawner_observation_v1_observation: GenFile = /*@__PURE__*/
  fileDesc("CihzcGF3bmVyL29ic2VydmF0aW9uL3YxL29ic2VydmF0aW9uLnByb3RvEhZzcGF3bmVyLm9ic2VydmF0aW9uLnYxInAKEE9ic2VydmF0aW9uRXZlbnQSOgoEdHlwZRgBIAEoDjIsLnNwYXduZXIub2JzZXJ2YXRpb24udjEuT2JzZXJ2YXRpb25FdmVudFR5cGUSDAoEdGV4dBgCIAEoCRISCgppbXBvcnRhbmNlGAMgASgFKl4KFE9ic2VydmF0aW9uRXZlbnRUeXBlEiYKIk9CU0VSVkFUSU9OX0VWRU5UX1RZUEVfVU5TUEVDSUZJRUQQABIeChpPQlNFUlZBVElPTl9FVkVOVF9UWVBFX0FERBABQqgBChpjb20uc3Bhd25lci5vYnNlcnZhdGlvbi52MUIQT2JzZXJ2YXRpb25Qcm90b1ABogIDU09YqgIWU3Bhd25lci5PYnNlcnZhdGlvbi5WMcoCFlNwYXduZXJcT2JzZXJ2YXRpb25cVjHiAiJTcGF3bmVyXE9ic2VydmF0aW9uXFYxXEdQQk1ldGFkYXRh6gIYU3Bhd25lcjo6T2JzZXJ2YXRpb246OlYxYgZwcm90bzM");

/**
 * @generated from message spawner.observation.v1.ObservationEvent
 */
export type ObservationEvent = Message<"spawner.observation.v1.ObservationEvent"> & {
  /**
   * @generated from field: spawner.observation.v1.ObservationEventType type = 1;
   */
  type: ObservationEventType;

  /**
   * Only input. Required field. The observation to add to the agent.
   *
   * @generated from field: string text = 2;
   */
  text: string;

  /**
   * Only input. Indicates the importance of the observation, represented as an
   * integer between 1 (low importance) and 9 (high importance). If a value is
   * not provided, value will be automatically detected.
   *
   * @generated from field: int32 importance = 3;
   */
  importance: number;
};

/**
 * Describes the message spawner.observation.v1.ObservationEvent.
 * Use `create(ObservationEventSchema)` to create a new message.
 */
export const ObservationEventSchema: GenMessage<ObservationEvent> = /*@__PURE__*/
  messageDesc(file_spawner_observation_v1_observation, 0);

/**
 * @generated from enum spawner.observation.v1.ObservationEventType
 */
export enum ObservationEventType {
  /**
   * @generated from enum value: OBSERVATION_EVENT_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Add a new observation for the agent.
   *
   * @generated from enum value: OBSERVATION_EVENT_TYPE_ADD = 1;
   */
  ADD = 1,
}

/**
 * Describes the enum spawner.observation.v1.ObservationEventType.
 */
export const ObservationEventTypeSchema: GenEnum<ObservationEventType> = /*@__PURE__*/
  enumDesc(file_spawner_observation_v1_observation, 0);

