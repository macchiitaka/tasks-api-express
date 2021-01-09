import { TaskModel } from '../../domain/models/task-model'

export type TaskSerialized = ReturnType<TaskSerializer['serialize']>

export class TaskSerializer {
  public serialize = (data: TaskModel) => ({
    ...data,
    created_at: new Date(data.created_at).toISOString(),
    updated_at: new Date(data.created_at).toISOString(),
  })

  public serializeAll = (data: TaskModel[]) => ({
    items: data.map(this.serialize),
  })
}
