import { TaskModel } from '../../domain/models/task-model'
import { TaskRepositoryInterface } from '../repository-interface/task-repository-interface'

export class ReplaceTask {
  private readonly taskRepository: TaskRepositoryInterface

  constructor(taskRepository: TaskRepositoryInterface) {
    this.taskRepository = taskRepository
  }

  public execute = ({
    id,
    ...data
  }: Omit<TaskModel, 'created_at' | 'updated_at'>) =>
    this.taskRepository.replace(id, data)
}
