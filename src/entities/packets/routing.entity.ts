import {
	EventActorType,
	type EventCharacter as ProtoEventCharacter,
	type EventPlayer as ProtoEventPlayer,
	type Routing as ProtoRouting,
} from "../../../proto/spawner/routing/v1/routing_pb";
import type { EventActor } from "../../../proto/spawner/routing/v1/routing_pb";

enum ActorType {
	UNSPECIFIED = "UNSPECIFIED",
	PLAYER = "PLAYER",
	CHARACTER = "CHARACTER",
	HERE = "HERE",
}

interface EventPlayerProps {
	id: string;
	displayName: string;
}

class EventPlayer {
	readonly id: string;
	readonly displayName: string;

	constructor(props: EventPlayerProps) {
		this.id = props.id;
		this.displayName = props.displayName;
	}

	static convertProto(proto: ProtoEventPlayer) {
		const { id, displayName } = proto;
		return new EventPlayer({
			id,
			displayName,
		});
	}
}

interface EventCharacterProps {
	id: string;
	customId: string;
	displayName: string;
}

class EventCharacter {
	readonly id: string;
	readonly customId: string;
	readonly displayName: string;

	constructor(props: EventCharacterProps) {
		this.id = props.id;
		this.customId = props.customId;
		this.displayName = props.displayName;
	}

	static convertProto(proto: ProtoEventCharacter) {
		const { id, customId, displayName } = proto;
		return new EventCharacter({
			id,
			customId,
			displayName,
		});
	}
}

interface ActorProps {
	type: ActorType;
	player?: EventPlayer;
	character?: EventCharacter;
}

class Actor {
	readonly type: ActorType;
	readonly player?: EventPlayer;
	readonly character?: EventCharacter;

	constructor(props: ActorProps) {
		this.type = props.type;
		this.player = props.player;
		this.character = props.character;
	}

	static convertProto(proto: EventActor): Actor {
		const type = Actor.getType(proto);
		return new Actor({
			type: type,
			player: proto.player && EventPlayer.convertProto(proto.player),
			character: proto.character && EventCharacter.convertProto(proto.character),
		});
	}

	private static getType(proto: EventActor) {
		const { type } = proto;
		switch (type) {
			case EventActorType.PLAYER:
				return ActorType.PLAYER;
			case EventActorType.CHARACTER:
				return ActorType.CHARACTER;
			case EventActorType.HERE:
				return ActorType.HERE;
			default:
				return ActorType.UNSPECIFIED;
		}
	}
}

interface RoutingProps {
	source?: Actor;
	target?: Actor;
}

export class Routing {
	readonly source?: Actor;
	readonly target?: Actor;

	constructor(props: RoutingProps) {
		this.source = props.source;
		this.target = props.target;
	}

	static convertProto(proto: ProtoRouting) {
		return new Routing({
			source: proto.source && Actor.convertProto(proto.source),
			target: proto.target && Actor.convertProto(proto.target),
		});
	}
}
