import { create } from "@bufbuild/protobuf";
import { Scene as ProtoScene } from "../../../proto/spawner/scene/v1/scene_pb";
import {
	type SessionController as ProtoSessionController,
	SessionControllerType as ProtoSessionControllerType,
	SessionMutationEvent as ProtoSessionMutationEvent,
	SessionMutationEventType as ProtoSessionMutationEventType,
  SessionMutationEventSchema
} from "../../../proto/spawner/session/v1/session_pb";
import { Scene, SceneMutationEvent } from "../scene.entity";
import { SceneSchema } from "../../../proto/spawner/scene/v1/scene_pb";

enum SessionControllerType {
	UNSPECIFIED = "UNSPECIFIED",
	LOAD = "LOAD",
	MUTATE = "MUTATE",
}

enum SessionMutationEventType {
	UNSPECIFIED = "UNSPECIFIED",
	SCENE = "SCENE",
}

interface SessionMutationEventProps {
	type: SessionMutationEventType;
	sceneMutation?: SceneMutationEvent;
}

class SessionMutationEvent {
	private type: SessionMutationEventType = SessionMutationEventType.UNSPECIFIED;
	readonly sceneMutation?: SceneMutationEvent;

	constructor(props: SessionMutationEventProps) {
		this.type = props.type;
		this.sceneMutation = props.sceneMutation;
	}

	static convertProto(proto: ProtoSessionMutationEvent) {
		const type = SessionMutationEvent.getType(proto);
		const { value } = proto.payload;
		return new SessionMutationEvent({
			type,
			...(value instanceof SceneMutationEvent && {
				sceneMutation: SceneMutationEvent.convertProto(value),
			}),
		});
	}

	static getType(proto: ProtoSessionMutationEvent) {
		const { type } = proto;

		switch (type) {
			case ProtoSessionMutationEventType.SCENE:
				return SessionMutationEventType.SCENE;
			default:
				return SessionMutationEventType.UNSPECIFIED;
		}
	}
}

interface SessionControllerProps {
	type: SessionControllerType;
	scene?: Scene;
	sessionMutation?: SessionMutationEvent;
}

export class SessionController {
	readonly type: SessionControllerType = SessionControllerType.UNSPECIFIED;
	readonly scene?: Scene;

	constructor(props: SessionControllerProps) {
		const { type, scene } = props;
		this.type = type;
		this.scene = scene;
	}

	static convertProto(proto: ProtoSessionController) {
		const type = SessionController.getType(proto);
		const { value } = proto.payload;

    const sessionMutationEvent = create(SessionMutationEventSchema)
    const scene = create(SceneSchema)

		return new SessionController({
			type,
			...(typeof value === typeof sessionMutationEvent && {
				sessionMutation: SessionMutationEvent.convertProto(value as ProtoSessionMutationEvent),
			}),
			...(typeof value === typeof scene && {
				scene: Scene.convertProto(value as ProtoScene),
			}),
		});
	}

	private static getType(proto: ProtoSessionController) {
		const { type } = proto;
		switch (type) {
			case ProtoSessionControllerType.LOAD:
				return SessionControllerType.LOAD;
			case ProtoSessionControllerType.MUTATE:
				return SessionControllerType.MUTATE;
			default:
				return SessionControllerType.UNSPECIFIED;
		}
	}
}
