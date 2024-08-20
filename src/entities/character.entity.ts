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

  private static isCharacterActor(proto: any): proto is CharacterActor {
    return (
        proto &&
        typeof proto.name === "string" &&
        typeof proto.displayName === "string" &&
        typeof proto.customId === "string"
    );
  }

	static convertProto(proto: SceneCharacter | CharacterActor) {
		if (this.isCharacterActor(proto)) {
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
