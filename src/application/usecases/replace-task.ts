import { TaskRepositoryInterface } from '../repository-interface/task-repository-interface'
import { TaskModel } from '../../domain/models/task-model'

export class ReplaceTask {
  private taskRepository: TaskRepositoryInterface

  constructor(taskRepository: TaskRepositoryInterface) {
    this.taskRepository = taskRepository
  }

  public execute = ({
    id,
    ...data
  }: Omit<TaskModel, 'created_at' | 'updated_at'>) =>
    this.taskRepository.replace(id, data)
}
