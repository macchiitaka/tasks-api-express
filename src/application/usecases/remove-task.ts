import type { TaskModel } from '../../domain/models/task-model'
import type { TaskRepositoryInterface } from '../repository-interface/task-repository-interface'

export class RemoveTask {
  private readonly taskRepository: TaskRepositoryInterface

  public constructor(taskRepository: TaskRepositoryInterface) {
    this.taskRepository = taskRepository
  }

  public execute = (id: TaskModel['id']) => this.taskRepository.delete(id)
}
