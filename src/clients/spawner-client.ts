import { GRPC_HOSTNAME } from "../common/config";
import type { ApiKey, ConnectionConfig, Gateway } from "../common/types";
import type { ConnectionError } from "../common/types";
import type { SpawnerPacket } from "../entities/packets/spawner_packet.entity";
import type { Player } from "../entities/player.entity";
import type { Scene } from "../entities/scene.entity";
import { ConnectionService } from "../services/connection-service";

export class SpawnerClient {
	private config: ConnectionConfig = {};
	private apiKey: ApiKey | undefined;
	private workspaceId: string | undefined;
	private scene: Scene | undefined;
	private player: Player | undefined;
	private onOpen: (() => void) | undefined;
	private onError: ((err: ConnectionError) => void) | undefined;
	private onMessage: ((packet: SpawnerPacket) => void) | undefined;
	private onClose: ((event?: CloseEvent) => void) | undefined;

	public setup() {
		this.validate();
		const config = this.ensureConfig();

		return new ConnectionService({
			config,
			apiKey: this.apiKey!,
			workspaceId: this.workspaceId!,
			scene: this.scene,
			player: this.player,
			onOpen: this.onOpen,
			onError: this.onError,
			onMessage: this.onMessage,
			onClose: this.onClose,
		});
	}

	async generateSessionToken() {
		this.validate();

		const config = this.ensureConfig();

		const service = new ConnectionService({
			config,
			apiKey: this.apiKey!,
			workspaceId: this.workspaceId!,
		});

		const token = await service.generateSessionToken();
		return token;
	}

	private ensureConfig() {
		const gateway: Gateway = this.ensureGateway(this.config?.gateway);
		const config: ConnectionConfig = { gateway };
		return config;
	}

	setApiKey(apiKey: ApiKey) {
		this.apiKey = apiKey;

		return this;
	}

	setWorkspace(id: string) {
		this.workspaceId = id;

		return this;
	}

	setConfig(config: ConnectionConfig) {
		this.config = config;

		return this;
	}

	setScene(scene: Scene) {
		this.scene = scene;

		return this;
	}

	setPlayer(player: Player) {
		this.player = player;
		return this;
	}

	private ensureGateway(gateway?: Gateway) {
		const hostname = gateway?.hostname ?? GRPC_HOSTNAME;
		const ssl = gateway?.ssl ?? true;
		return { hostname, ssl };
	}

	public setOnOpen(fn: () => void) {
		this.onOpen = fn;

		return this;
	}

	public setOnError(fn: (err: ConnectionError) => void) {
		this.onError = fn;

		return this;
	}

	public setOnMessage(fn: (packet: SpawnerPacket) => void) {
		this.onMessage = fn;

		return this;
	}

	public setOnClose(fn: () => void) {
		this.onClose = fn;

		return this;
	}

	private validate() {
		if (!this.apiKey?.key || !this.apiKey.secret) {
			throw Error("Api key is required");
		}
		if (!this.workspaceId) {
			throw Error("Workspace ID is required");
		}
	}
}
