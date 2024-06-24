// @generated by protoc-gen-es v1.10.0
// @generated from file spawner/routing/v1/routing.proto (package spawner.routing.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum spawner.routing.v1.EventActorType
 */
export declare enum EventActorType {
  /**
   * @generated from enum value: EVENT_ACTOR_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: EVENT_ACTOR_TYPE_PLAYER = 1;
   */
  PLAYER = 1,

  /**
   * @generated from enum value: EVENT_ACTOR_TYPE_CHARACTER = 2;
   */
  CHARACTER = 2,

  /**
   * Experimental. Only for event target field. Allows targeting
   * all actors in the interaction space.
   *
   * @generated from enum value: EVENT_ACTOR_TYPE_HERE = 3;
   */
  HERE = 3,
}

/**
 * @generated from message spawner.routing.v1.EventPlayer
 */
export declare class EventPlayer extends Message<EventPlayer> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * Output only.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  constructor(data?: PartialMessage<EventPlayer>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spawner.routing.v1.EventPlayer";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventPlayer;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventPlayer;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventPlayer;

  static equals(a: EventPlayer | PlainMessage<EventPlayer> | undefined, b: EventPlayer | PlainMessage<EventPlayer> | undefined): boolean;
}

/**
 * @generated from message spawner.routing.v1.EventCharacter
 */
export declare class EventCharacter extends Message<EventCharacter> {
  /**
   * Output only.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string custom_id = 2;
   */
  customId: string;

  /**
   * Output only.
   *
   * @generated from field: string display_name = 3;
   */
  displayName: string;

  constructor(data?: PartialMessage<EventCharacter>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spawner.routing.v1.EventCharacter";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventCharacter;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventCharacter;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventCharacter;

  static equals(a: EventCharacter | PlainMessage<EventCharacter> | undefined, b: EventCharacter | PlainMessage<EventCharacter> | undefined): boolean;
}

/**
 * @generated from message spawner.routing.v1.EventActor
 */
export declare class EventActor extends Message<EventActor> {
  /**
   * @generated from field: spawner.routing.v1.EventActorType type = 1;
   */
  type: EventActorType;

  /**
   * @generated from field: spawner.routing.v1.EventPlayer player = 2;
   */
  player?: EventPlayer;

  /**
   * @generated from field: spawner.routing.v1.EventCharacter character = 3;
   */
  character?: EventCharacter;

  constructor(data?: PartialMessage<EventActor>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spawner.routing.v1.EventActor";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventActor;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventActor;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventActor;

  static equals(a: EventActor | PlainMessage<EventActor> | undefined, b: EventActor | PlainMessage<EventActor> | undefined): boolean;
}

/**
 * @generated from message spawner.routing.v1.Routing
 */
export declare class Routing extends Message<Routing> {
  /**
   * Source actor triggering the event. This is usually a player,
   * but may be an NPC for NPC-NPC events.
   *
   * @generated from field: spawner.routing.v1.EventActor source = 1;
   */
  source?: EventActor;

  /**
   * Target actor that responds to the input. This is usually a character.
   *
   * @generated from field: spawner.routing.v1.EventActor target = 2;
   */
  target?: EventActor;

  constructor(data?: PartialMessage<Routing>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spawner.routing.v1.Routing";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Routing;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Routing;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Routing;

  static equals(a: Routing | PlainMessage<Routing> | undefined, b: Routing | PlainMessage<Routing> | undefined): boolean;
}

