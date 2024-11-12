// @generated by protoc-gen-es v2.2.0 with parameter "target=ts"
// @generated from file spawner/field_of_view/v1/field_of_view.proto (package spawner.field_of_view.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file spawner/field_of_view/v1/field_of_view.proto.
 */
export const file_spawner_field_of_view_v1_field_of_view: GenFile = /*@__PURE__*/
  fileDesc("CixzcGF3bmVyL2ZpZWxkX29mX3ZpZXcvdjEvZmllbGRfb2Zfdmlldy5wcm90bxIYc3Bhd25lci5maWVsZF9vZl92aWV3LnYxIjEKDEZvdlN0cnVjdHVyZRIMCgRuYW1lGAEgASgJEhMKC2Rlc2NyaXB0aW9uGAIgASgJIi4KCUZvdk9iamVjdBIMCgRuYW1lGAEgASgJEhMKC2Rlc2NyaXB0aW9uGAIgASgJIn8KC0ZpZWxkT2ZWaWV3EjoKCnN0cnVjdHVyZXMYASADKAsyJi5zcGF3bmVyLmZpZWxkX29mX3ZpZXcudjEuRm92U3RydWN0dXJlEjQKB29iamVjdHMYAiADKAsyIy5zcGF3bmVyLmZpZWxkX29mX3ZpZXcudjEuRm92T2JqZWN0QqoBChxjb20uc3Bhd25lci5maWVsZF9vZl92aWV3LnYxQhBGaWVsZE9mVmlld1Byb3RvUAGiAgNTRliqAhZTcGF3bmVyLkZpZWxkT2ZWaWV3LlYxygIWU3Bhd25lclxGaWVsZE9mVmlld1xWMeICIlNwYXduZXJcRmllbGRPZlZpZXdcVjFcR1BCTWV0YWRhdGHqAhhTcGF3bmVyOjpGaWVsZE9mVmlldzo6VjFiBnByb3RvMw");

/**
 * Input only. Defines structures such as, buildings, bridges.
 *
 * @generated from message spawner.field_of_view.v1.FovStructure
 */
export type FovStructure = Message<"spawner.field_of_view.v1.FovStructure"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string description = 2;
   */
  description: string;
};

/**
 * Describes the message spawner.field_of_view.v1.FovStructure.
 * Use `create(FovStructureSchema)` to create a new message.
 */
export const FovStructureSchema: GenMessage<FovStructure> = /*@__PURE__*/
  messageDesc(file_spawner_field_of_view_v1_field_of_view, 0);

/**
 * Input only. Defines an object in a field of view. An object can be anything
 * that cannot be defined by other (more specific) structures.
 *
 * @generated from message spawner.field_of_view.v1.FovObject
 */
export type FovObject = Message<"spawner.field_of_view.v1.FovObject"> & {
  /**
   * The name of the object.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Description of the object. Description is passed along with the name to
   * depict the surrounding environment.
   *
   * @generated from field: string description = 2;
   */
  description: string;
};

/**
 * Describes the message spawner.field_of_view.v1.FovObject.
 * Use `create(FovObjectSchema)` to create a new message.
 */
export const FovObjectSchema: GenMessage<FovObject> = /*@__PURE__*/
  messageDesc(file_spawner_field_of_view_v1_field_of_view, 1);

/**
 * Input only. Defines the field of view of the character/agent. Note that the
 * field-of-view is not stored on the server. It must be provided each time a
 * call is made.
 *
 * @generated from message spawner.field_of_view.v1.FieldOfView
 */
export type FieldOfView = Message<"spawner.field_of_view.v1.FieldOfView"> & {
  /**
   * @generated from field: repeated spawner.field_of_view.v1.FovStructure structures = 1;
   */
  structures: FovStructure[];

  /**
   * @generated from field: repeated spawner.field_of_view.v1.FovObject objects = 2;
   */
  objects: FovObject[];
};

/**
 * Describes the message spawner.field_of_view.v1.FieldOfView.
 * Use `create(FieldOfViewSchema)` to create a new message.
 */
export const FieldOfViewSchema: GenMessage<FieldOfView> = /*@__PURE__*/
  messageDesc(file_spawner_field_of_view_v1_field_of_view, 2);

