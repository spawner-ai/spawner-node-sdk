// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file spawner/session/v1/session.proto (package spawner.session.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Scene, SceneMutationEvent } from "../../scene/v1/scene_pb";
import { file_spawner_scene_v1_scene } from "../../scene/v1/scene_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file spawner/session/v1/session.proto.
 */
export const file_spawner_session_v1_session: GenFile = /*@__PURE__*/
  fileDesc("CiBzcGF3bmVyL3Nlc3Npb24vdjEvc2Vzc2lvbi5wcm90bxISc3Bhd25lci5zZXNzaW9uLnYxIpQBChRTZXNzaW9uTXV0YXRpb25FdmVudBI6CgR0eXBlGAEgASgOMiwuc3Bhd25lci5zZXNzaW9uLnYxLlNlc3Npb25NdXRhdGlvbkV2ZW50VHlwZRI1CgVzY2VuZRgCIAEoCzIkLnNwYXduZXIuc2NlbmUudjEuU2NlbmVNdXRhdGlvbkV2ZW50SABCCQoHcGF5bG9hZCK/AQoRU2Vzc2lvbkNvbnRyb2xsZXISNwoEdHlwZRgBIAEoDjIpLnNwYXduZXIuc2Vzc2lvbi52MS5TZXNzaW9uQ29udHJvbGxlclR5cGUSKAoFc2NlbmUYAiABKAsyFy5zcGF3bmVyLnNjZW5lLnYxLlNjZW5lSAASPAoIbXV0YXRpb24YAyABKAsyKC5zcGF3bmVyLnNlc3Npb24udjEuU2Vzc2lvbk11dGF0aW9uRXZlbnRIAEIJCgdwYXlsb2FkKoYBChVTZXNzaW9uQ29udHJvbGxlclR5cGUSJwojU0VTU0lPTl9DT05UUk9MTEVSX1RZUEVfVU5TUEVDSUZJRUQQABIgChxTRVNTSU9OX0NPTlRST0xMRVJfVFlQRV9MT0FEEAESIgoeU0VTU0lPTl9DT05UUk9MTEVSX1RZUEVfTVVUQVRFEAIqbgoYU2Vzc2lvbk11dGF0aW9uRXZlbnRUeXBlEisKJ1NFU1NJT05fTVVUQVRJT05fRVZFTlRfVFlQRV9VTlNQRUNJRklFRBAAEiUKIVNFU1NJT05fTVVUQVRJT05fRVZFTlRfVFlQRV9TQ0VORRABQpABChZjb20uc3Bhd25lci5zZXNzaW9uLnYxQgxTZXNzaW9uUHJvdG9QAaICA1NTWKoCElNwYXduZXIuU2Vzc2lvbi5WMcoCElNwYXduZXJcU2Vzc2lvblxWMeICHlNwYXduZXJcU2Vzc2lvblxWMVxHUEJNZXRhZGF0YeoCFFNwYXduZXI6OlNlc3Npb246OlYxYgZwcm90bzM", [file_spawner_scene_v1_scene]);

/**
 * @generated from message spawner.session.v1.SessionMutationEvent
 */
export type SessionMutationEvent = Message<"spawner.session.v1.SessionMutationEvent"> & {
  /**
   * @generated from field: spawner.session.v1.SessionMutationEventType type = 1;
   */
  type: SessionMutationEventType;

  /**
   * @generated from oneof spawner.session.v1.SessionMutationEvent.payload
   */
  payload: {
    /**
     * @generated from field: spawner.scene.v1.SceneMutationEvent scene = 2;
     */
    value: SceneMutationEvent;
    case: "scene";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message spawner.session.v1.SessionMutationEvent.
 * Use `create(SessionMutationEventSchema)` to create a new message.
 */
export const SessionMutationEventSchema: GenMessage<SessionMutationEvent> = /*@__PURE__*/
  messageDesc(file_spawner_session_v1_session, 0);

/**
 * @generated from message spawner.session.v1.SessionController
 */
export type SessionController = Message<"spawner.session.v1.SessionController"> & {
  /**
   * @generated from field: spawner.session.v1.SessionControllerType type = 1;
   */
  type: SessionControllerType;

  /**
   * @generated from oneof spawner.session.v1.SessionController.payload
   */
  payload: {
    /**
     * Indicates the scene for the session.
     *
     * @generated from field: spawner.scene.v1.Scene scene = 2;
     */
    value: Scene;
    case: "scene";
  } | {
    /**
     * Input only. The results for the mutation event
     * should be returned in `scene` field. `type` field
     * must be set to `MUTATE`.
     *
     * @generated from field: spawner.session.v1.SessionMutationEvent mutation = 3;
     */
    value: SessionMutationEvent;
    case: "mutation";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message spawner.session.v1.SessionController.
 * Use `create(SessionControllerSchema)` to create a new message.
 */
export const SessionControllerSchema: GenMessage<SessionController> = /*@__PURE__*/
  messageDesc(file_spawner_session_v1_session, 1);

/**
 * @generated from enum spawner.session.v1.SessionControllerType
 */
export enum SessionControllerType {
  /**
   * @generated from enum value: SESSION_CONTROLLER_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Loads data to session based on the content set on the Spawner Console.
   *
   * @generated from enum value: SESSION_CONTROLLER_TYPE_LOAD = 1;
   */
  LOAD = 1,

  /**
   * Mutates properties in realtime. This updates session-specific values.
   *
   * @generated from enum value: SESSION_CONTROLLER_TYPE_MUTATE = 2;
   */
  MUTATE = 2,
}

/**
 * Describes the enum spawner.session.v1.SessionControllerType.
 */
export const SessionControllerTypeSchema: GenEnum<SessionControllerType> = /*@__PURE__*/
  enumDesc(file_spawner_session_v1_session, 0);

/**
 * @generated from enum spawner.session.v1.SessionMutationEventType
 */
export enum SessionMutationEventType {
  /**
   * @generated from enum value: SESSION_MUTATION_EVENT_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Set for scene mutations.
   *
   * @generated from enum value: SESSION_MUTATION_EVENT_TYPE_SCENE = 1;
   */
  SCENE = 1,
}

/**
 * Describes the enum spawner.session.v1.SessionMutationEventType.
 */
export const SessionMutationEventTypeSchema: GenEnum<SessionMutationEventType> = /*@__PURE__*/
  enumDesc(file_spawner_session_v1_session, 1);
