import { TaskRepositoryInterface } from '../repository-interface/task-repository-interface'
import { TaskModel } from '../../domain/models/task-model'

export class CreateTask {
  private taskRepository: TaskRepositoryInterface

  constructor(taskRepository: TaskRepositoryInterface) {
    this.taskRepository = taskRepository
  }

  public execute = (title: TaskModel['title']) =>
    this.taskRepository.save({ title })
}
