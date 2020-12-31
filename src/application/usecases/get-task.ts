import { TaskModel } from '../../domain/models/task-model'
import { TaskRepositoryInterface } from '../repository-interface/task-repository-interface'

export class GetTask {
  private readonly taskRepository: TaskRepositoryInterface

  constructor(taskRepository: TaskRepositoryInterface) {
    this.taskRepository = taskRepository
  }

  public execute = (id: TaskModel['id']) => this.taskRepository.find(id)
}
