// @generated by protoc-gen-es v1.10.0
// @generated from file spawner/session/v1/session.proto (package spawner.session.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Scene, SceneMutationEvent } from "../../scene/v1/scene_pb.js";

/**
 * @generated from enum spawner.session.v1.SessionControllerType
 */
export const SessionControllerType = /*@__PURE__*/ proto3.makeEnum(
  "spawner.session.v1.SessionControllerType",
  [
    {no: 0, name: "SESSION_CONTROLLER_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "SESSION_CONTROLLER_TYPE_LOAD", localName: "LOAD"},
    {no: 2, name: "SESSION_CONTROLLER_TYPE_MUTATE", localName: "MUTATE"},
  ],
);

/**
 * @generated from enum spawner.session.v1.SessionMutationEventType
 */
export const SessionMutationEventType = /*@__PURE__*/ proto3.makeEnum(
  "spawner.session.v1.SessionMutationEventType",
  [
    {no: 0, name: "SESSION_MUTATION_EVENT_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "SESSION_MUTATION_EVENT_TYPE_SCENE", localName: "SCENE"},
  ],
);

/**
 * @generated from message spawner.session.v1.SessionMutationEvent
 */
export const SessionMutationEvent = /*@__PURE__*/ proto3.makeMessageType(
  "spawner.session.v1.SessionMutationEvent",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(SessionMutationEventType) },
    { no: 2, name: "scene", kind: "message", T: SceneMutationEvent, oneof: "payload" },
  ],
);

/**
 * @generated from message spawner.session.v1.SessionController
 */
export const SessionController = /*@__PURE__*/ proto3.makeMessageType(
  "spawner.session.v1.SessionController",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(SessionControllerType) },
    { no: 2, name: "scene", kind: "message", T: Scene, oneof: "payload" },
    { no: 3, name: "mutation", kind: "message", T: SessionMutationEvent, oneof: "payload" },
  ],
);

