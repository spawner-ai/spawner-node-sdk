import { CreateWorldEvent, AgentConfiguration } from "../../proto/spawner/world/v1/world_pb";

export interface WorldProps {
  id: string;
  agents: AgentConfiguration[]
}

export class World {
  readonly id: string;
  readonly agents: AgentConfiguration[];
  
  constructor(props: WorldProps) {
    const { id, agents } = props
    this.id = id;
    this.agents = agents;
  }

  static convertProto(proto: CreateWorldEvent) {
    const { worldId, agents } = proto

    return new World({
      id: worldId,
      agents
    })
  }
}