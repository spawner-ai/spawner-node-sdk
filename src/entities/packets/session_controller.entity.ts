import { Scene as ProtoScene } from "../../../proto/spawner/scene/v1/scene_pb";
import {
	type SessionController as ProtoSessionController,
	SessionControllerType as ProtoSessionControllerType,
	SessionMutationEvent as ProtoSessionMutationEvent,
	SessionMutationEventType as ProtoSessionMutationEventType,
} from "../../../proto/spawner/session/v1/session_pb";
import { Scene, SceneMutationEvent } from "../scene.entity";

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

	private static getType(proto: ProtoSessionMutationEvent) {
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

		return new SessionController({
			type,
			...(value instanceof ProtoSessionMutationEvent && {
				sessionMutation: SessionMutationEvent.convertProto(value),
			}),
			...(value instanceof ProtoScene && {
				scene: Scene.convertProto(value),
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
