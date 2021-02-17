import type { TaskRepositoryInterface } from '../repository-interface/task-repository-interface'

export class ListTasks {
  private readonly taskRepository: TaskRepositoryInterface

  public constructor(taskRepository: TaskRepositoryInterface) {
    this.taskRepository = taskRepository
  }

  public execute = () => this.taskRepository.findAll()
}
