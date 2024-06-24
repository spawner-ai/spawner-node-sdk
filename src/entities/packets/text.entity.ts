import type { TextEvent as ProtoText } from "../../../proto/spawner/text/v1/text_pb";

interface TextProps {
	utteranceId: string;
	text: string;
	delta: string;
	final: boolean;
}

export class TextEvent {
	readonly utteranceId: string;
	readonly text: string;
	readonly delta: string;
	readonly final: boolean;

	constructor(props: TextProps) {
		const { utteranceId, text, delta, final } = props;
		this.utteranceId = utteranceId;
		this.text = text;
		this.delta = delta;
		this.final = final;
	}

	static convertProto(proto: ProtoText) {
		proto.utteranceId;
		return new TextEvent({
			utteranceId: proto.utteranceId,
			text: proto.text,
			delta: proto.delta,
			final: proto.final,
		});
	}
}
