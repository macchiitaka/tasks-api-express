import { TaskModel } from '../../domain/models/task-model'
import { TaskRepositoryInterface } from '../repository-interface/task-repository-interface'

export class CreateTask {
  private readonly taskRepository: TaskRepositoryInterface

  constructor(taskRepository: TaskRepositoryInterface) {
    this.taskRepository = taskRepository
  }

  public execute = (title: TaskModel['title']) =>
    this.taskRepository.save({ title })
}
