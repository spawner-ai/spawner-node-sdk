// @generated by protoc-gen-es v1.10.0
// @generated from file spawner/emotion/v1/emotion.proto (package spawner.emotion.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum spawner.emotion.v1.EmotionResult
 */
export declare enum EmotionResult {
  /**
   * @generated from enum value: EMOTION_RESULT_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: EMOTION_RESULT_NEUTRAL = 1;
   */
  NEUTRAL = 1,

  /**
   * @generated from enum value: EMOTION_RESULT_JOY = 2;
   */
  JOY = 2,

  /**
   * @generated from enum value: EMOTION_RESULT_SADNESS = 3;
   */
  SADNESS = 3,

  /**
   * @generated from enum value: EMOTION_RESULT_ANGER = 4;
   */
  ANGER = 4,

  /**
   * @generated from enum value: EMOTION_RESULT_FEAR = 5;
   */
  FEAR = 5,

  /**
   * @generated from enum value: EMOTION_RESULT_DISGUST = 6;
   */
  DISGUST = 6,

  /**
   * @generated from enum value: EMOTION_RESULT_SURPRISE = 7;
   */
  SURPRISE = 7,
}

/**
 * @generated from message spawner.emotion.v1.EmotionScore
 */
export declare class EmotionScore extends Message<EmotionScore> {
  /**
   * @generated from field: float joy = 1;
   */
  joy: number;

  /**
   * @generated from field: float sadness = 2;
   */
  sadness: number;

  /**
   * @generated from field: float anger = 3;
   */
  anger: number;

  /**
   * @generated from field: float fear = 4;
   */
  fear: number;

  /**
   * @generated from field: float disgust = 5;
   */
  disgust: number;

  /**
   * @generated from field: float surprise = 6;
   */
  surprise: number;

  constructor(data?: PartialMessage<EmotionScore>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spawner.emotion.v1.EmotionScore";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EmotionScore;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EmotionScore;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EmotionScore;

  static equals(a: EmotionScore | PlainMessage<EmotionScore> | undefined, b: EmotionScore | PlainMessage<EmotionScore> | undefined): boolean;
}

/**
 * Output only. Indicates the emotion detection results.
 *
 * @generated from message spawner.emotion.v1.EmotionEvent
 */
export declare class EmotionEvent extends Message<EmotionEvent> {
  /**
   * Only output. Relative resource path.
   * Format: `interactions/{interaction_id}/emotions/{record_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Output only. Identifies a grouping of multiple packages.
   *
   * @generated from field: string utterance_id = 2;
   */
  utteranceId: string;

  /**
   * Emotion detected for the most recent invocation.
   *
   * @generated from field: spawner.emotion.v1.EmotionResult result = 3;
   */
  result: EmotionResult;

  /**
   * Emotion scores calculated based on past scores and sensitivity settings.
   *
   * @generated from field: spawner.emotion.v1.EmotionScore score = 4;
   */
  score?: EmotionScore;

  constructor(data?: PartialMessage<EmotionEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spawner.emotion.v1.EmotionEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EmotionEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EmotionEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EmotionEvent;

  static equals(a: EmotionEvent | PlainMessage<EmotionEvent> | undefined, b: EmotionEvent | PlainMessage<EmotionEvent> | undefined): boolean;
}
