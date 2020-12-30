import { TaskRepositoryInterface } from '../repository-interface/task-repository-interface'
import { TaskModel } from '../../domain/models/task-model'

export class RemoveTask {
  private taskRepository: TaskRepositoryInterface

  constructor(taskRepository: TaskRepositoryInterface) {
    this.taskRepository = taskRepository
  }

  public execute = (id: TaskModel['id']) => this.taskRepository.delete(id)
}
