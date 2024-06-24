import { CharacterActor } from "../../proto/spawner/actor/v1/actor_pb";
import type { SceneCharacter } from "../../proto/spawner/scene/v1/scene_pb";

export interface CharacterProps {
	id: string;
	displayName?: string;
}

export class Character {
	readonly id: string;
	readonly displayName?: string;

	constructor(props: CharacterProps) {
		const { id, displayName } = props;
		this.id = id;
		this.displayName = displayName;
	}

	static convertProto(proto: SceneCharacter | CharacterActor) {
		if (proto instanceof CharacterActor) {
			const { displayName, customId } = proto;
			return new Character({
				id: customId,
				displayName,
			});
		}
		const { customId } = proto;
		return new Character({
			id: customId,
		});
	}
}
