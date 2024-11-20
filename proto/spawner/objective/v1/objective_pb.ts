// @generated by protoc-gen-es v2.2.0 with parameter "target=ts"
// @generated from file spawner/objective/v1/objective.proto (package spawner.objective.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file spawner/objective/v1/objective.proto.
 */
export const file_spawner_objective_v1_objective: GenFile = /*@__PURE__*/
  fileDesc("CiRzcGF3bmVyL29iamVjdGl2ZS92MS9vYmplY3RpdmUucHJvdG8SFHNwYXduZXIub2JqZWN0aXZlLnYxIlYKDk9iamVjdGl2ZUV2ZW50EjYKBHR5cGUYASABKA4yKC5zcGF3bmVyLm9iamVjdGl2ZS52MS5PYmplY3RpdmVFdmVudFR5cGUSDAoEdGV4dBgCIAEoCSpYChJPYmplY3RpdmVFdmVudFR5cGUSJAogT0JKRUNUSVZFX0VWRU5UX1RZUEVfVU5TUEVDSUZJRUQQABIcChhPQkpFQ1RJVkVfRVZFTlRfVFlQRV9TRVQQAUKcAQoYY29tLnNwYXduZXIub2JqZWN0aXZlLnYxQg5PYmplY3RpdmVQcm90b1ABogIDU09YqgIUU3Bhd25lci5PYmplY3RpdmUuVjHKAhRTcGF3bmVyXE9iamVjdGl2ZVxWMeICIFNwYXduZXJcT2JqZWN0aXZlXFYxXEdQQk1ldGFkYXRh6gIWU3Bhd25lcjo6T2JqZWN0aXZlOjpWMWIGcHJvdG8z");

/**
 * @generated from message spawner.objective.v1.ObjectiveEvent
 */
export type ObjectiveEvent = Message<"spawner.objective.v1.ObjectiveEvent"> & {
  /**
   * @generated from field: spawner.objective.v1.ObjectiveEventType type = 1;
   */
  type: ObjectiveEventType;

  /**
   * The objective of the agent. Clients may pass a value to manually set an
   * objective.
   *
   * @generated from field: string text = 2;
   */
  text: string;
};

/**
 * Describes the message spawner.objective.v1.ObjectiveEvent.
 * Use `create(ObjectiveEventSchema)` to create a new message.
 */
export const ObjectiveEventSchema: GenMessage<ObjectiveEvent> = /*@__PURE__*/
  messageDesc(file_spawner_objective_v1_objective, 0);

/**
 * @generated from enum spawner.objective.v1.ObjectiveEventType
 */
export enum ObjectiveEventType {
  /**
   * @generated from enum value: OBJECTIVE_EVENT_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Set an objective for the agent to pursue.
   *
   * @generated from enum value: OBJECTIVE_EVENT_TYPE_SET = 1;
   */
  SET = 1,
}

/**
 * Describes the enum spawner.objective.v1.ObjectiveEventType.
 */
export const ObjectiveEventTypeSchema: GenEnum<ObjectiveEventType> = /*@__PURE__*/
  enumDesc(file_spawner_objective_v1_objective, 0);
