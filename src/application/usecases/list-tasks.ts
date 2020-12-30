import { TaskRepositoryInterface } from '../repository-interface/task-repository-interface'

export class ListTasks {
  private taskRepository: TaskRepositoryInterface

  constructor(taskRepository: TaskRepositoryInterface) {
    this.taskRepository = taskRepository
  }

  public execute = () => this.taskRepository.findAll()
}
