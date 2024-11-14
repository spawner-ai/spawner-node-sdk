import { CreateWorldEvent, WorldController as ProtoWorldController, WorldControllerType as ProtoWorldControllerType } from "../../../proto/spawner/world/v1/world_pb";
import { ObservationEvent } from "../../../proto/spawner/observation/v1/observation_pb";
import { PlanEvent } from "../../../proto/spawner/plan/v1/plan_pb";

enum WorldControllerType {
	UNSPECIFIED = "UNSPECIFIED",
	CREATE = "CREATE",
	OBSERVATION = "OBSERVATION",
  PLAN = "PLAN"
}

interface WorldControllerProps {
	type: WorldControllerType;
	create?: CreateWorldEvent;
	observation?: ObservationEvent;
  plan?: PlanEvent;
}

export class WorldController {
  readonly type: WorldControllerType = WorldControllerType.UNSPECIFIED;
  readonly create?: CreateWorldEvent;
  readonly observation?: ObservationEvent;
  readonly plan?: PlanEvent;

  constructor(props: WorldControllerProps) {
    const { type } = props

    if(type === WorldControllerType.CREATE){
      this.create = props.create
    }
    
    if(type === WorldControllerType.OBSERVATION){
      this.observation = props.observation
    }

    if(type === WorldControllerType.PLAN){
      this.plan = props.plan
    }
  }

  static convertProto(proto: ProtoWorldController) {
    const type = WorldController.getType(proto)
    const { payload } = proto
    const { value } = payload

    return new WorldController({
      type,
      ...(type === WorldControllerType.CREATE && {
				create: value as CreateWorldEvent,
			}),
      ...(type === WorldControllerType.OBSERVATION && {
				observation: value as ObservationEvent,
			}),
      ...(type === WorldControllerType.PLAN && {
				plan: value as PlanEvent,
			})
    })
  }

  private static getType(proto: ProtoWorldController) {
		const { type } = proto;
		switch (type) {
			case ProtoWorldControllerType.CREATE:
				return WorldControllerType.CREATE;
			case ProtoWorldControllerType.OBSERVATION:
				return WorldControllerType.OBSERVATION;
      case ProtoWorldControllerType.PLAN:
				return WorldControllerType.PLAN;
			default:
				return WorldControllerType.UNSPECIFIED;
		}
	}
}