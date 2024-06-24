// @generated by protoc-gen-es v1.10.0
// @generated from file spawner/input_filter/v1/input_filter.proto (package spawner.input_filter.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum spawner.input_filter.v1.InputFilterType
 */
export declare enum InputFilterType {
  /**
   * @generated from enum value: INPUT_FILTER_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: INPUT_FILTER_TYPE_MODERATION = 1;
   */
  MODERATION = 1,

  /**
   * @generated from enum value: INPUT_FILTER_TYPE_CUSTOM = 2;
   */
  CUSTOM = 2,
}

/**
 * @generated from message spawner.input_filter.v1.InputFilterMatch
 */
export declare class InputFilterMatch extends Message<InputFilterMatch> {
  /**
   * @generated from field: string label = 1;
   */
  label: string;

  /**
   * @generated from field: string text = 2;
   */
  text: string;

  constructor(data?: PartialMessage<InputFilterMatch>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spawner.input_filter.v1.InputFilterMatch";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InputFilterMatch;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InputFilterMatch;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InputFilterMatch;

  static equals(a: InputFilterMatch | PlainMessage<InputFilterMatch> | undefined, b: InputFilterMatch | PlainMessage<InputFilterMatch> | undefined): boolean;
}

/**
 * Represents a filter result, which may be triggered
 * when the player input is flagged for moderation
 * or filtered words set in the workspace.
 *
 * @generated from message spawner.input_filter.v1.InputFilterEvent
 */
export declare class InputFilterEvent extends Message<InputFilterEvent> {
  /**
   * Output only. Identifies a grouping of multiple packages.
   *
   * @generated from field: string utterance_id = 1;
   */
  utteranceId: string;

  /**
   * Only output. Indicates the reason the input has been flagged.
   *
   * @generated from field: spawner.input_filter.v1.InputFilterType type = 2;
   */
  type: InputFilterType;

  /**
   * Only output. `True` if the input has been filtered.
   *
   * @generated from field: bool is_flagged = 3;
   */
  isFlagged: boolean;

  /**
   * Only output. Response returned by the target character.
   * This may be empty depending on character settings. Client
   * must handle for each case.
   *
   * @generated from field: string text = 4;
   */
  text: string;

  /**
   * Only output. Indicates what was filtered based on workspace settings.
   * Assume empty if the input was moderated.
   *
   * @generated from field: repeated spawner.input_filter.v1.InputFilterMatch matches = 5;
   */
  matches: InputFilterMatch[];

  constructor(data?: PartialMessage<InputFilterEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spawner.input_filter.v1.InputFilterEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InputFilterEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InputFilterEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InputFilterEvent;

  static equals(a: InputFilterEvent | PlainMessage<InputFilterEvent> | undefined, b: InputFilterEvent | PlainMessage<InputFilterEvent> | undefined): boolean;
}

