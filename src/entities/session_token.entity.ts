import type { GenerateSessionTokenResponse } from "../../proto/spawner/main/v1/main_pb";

interface SessionTokenProps {
	sessionId: string;
	token: string;
	tokenType: string;
	expireTime?: Date;
}

export class SessionToken {
	readonly sessionId: string;
	readonly token: string;
	readonly tokenType: string;
	readonly expireTime?: Date;

	constructor(props: SessionTokenProps) {
		this.sessionId = props.sessionId;
		this.token = props.token;
		this.tokenType = props.tokenType;
		this.expireTime = props.expireTime;
	}

	static isExpired(token: SessionToken) {
		if (!token.expireTime) {
			throw Error("Session token is not set expire time");
		}
		const { expireTime } = token;

		const timeDiff = new Date(expireTime).getTime() - new Date().getTime();
		return timeDiff <= 0;
	}

	static convertProto(proto: GenerateSessionTokenResponse) {
		return new SessionToken({
			sessionId: proto.sessionId,
			token: proto.token,
			tokenType: proto.tokenType,
			expireTime: proto.expireTime?.toDate(),
		});
	}
}
