import * as z from 'zod'

import { CreateTask } from '../../application/usecases/create-task'
import { GetTask } from '../../application/usecases/get-task'
import { ListTasks } from '../../application/usecases/list-tasks'
import { RemoveTask } from '../../application/usecases/remove-task'
import { ReplaceTask } from '../../application/usecases/replace-task'
import type { Response } from '../../utils/type'
import type { Prisma } from '../database/prisma'
import { TaskRepository } from '../repositories/task-repository'
import type { TaskSerialized } from '../serializers/task'
import { TaskSerializer } from '../serializers/task'

export const schema = {
  id: z.number().int().positive(),
  title: z.string().max(2 ** 16),
  done: z.boolean(),
}

export class TasksController {
  private readonly taskRepository: TaskRepository
  private readonly taskSerializer: TaskSerializer

  constructor(prisma: Prisma) {
    this.taskRepository = new TaskRepository(prisma)
    this.taskSerializer = new TaskSerializer()
  }

  public listTasks = async (): Response<{ items: TaskSerialized[] }> => {
    const result = await new ListTasks(this.taskRepository).execute()

    if (!result.success) {
      return result
    }

    return {
      success: true,
      data: this.taskSerializer.serializeAll(result.data),
    }
  }

  public getTask = async (id: number): Response<TaskSerialized> => {
    const validation = z.object({ id: schema.id }).safeParse({ id })

    if (!validation.success) {
      return validation
    }

    const result = await new GetTask(this.taskRepository).execute(
      validation.data.id,
    )

    if (!result.success) {
      return result
    }

    return {
      success: true,
      data: this.taskSerializer.serialize(result.data),
    }
  }

  public createTask = async (data: {
    title: any
  }): Response<TaskSerialized> => {
    const validation = z.object({ title: schema.title }).safeParse(data)

    if (!validation.success) {
      return validation
    }

    const result = await new CreateTask(this.taskRepository).execute(
      validation.data.title,
    )

    if (!result.success) {
      return result
    }

    return {
      success: true,
      data: this.taskSerializer.serialize(result.data),
    }
  }

  public replaceTask = async (
    id: number,
    data: { title: any; done: any },
  ): Response<TaskSerialized> => {
    const validation = z.object(schema).safeParse({ ...data, id })

    if (!validation.success) {
      return validation
    }

    const task = await new GetTask(this.taskRepository).execute(id)

    if (!task.success) {
      return task
    }

    const result = await new ReplaceTask(this.taskRepository).execute(
      validation.data,
    )

    if (!result.success) {
      return result
    }

    return {
      success: true,
      data: this.taskSerializer.serialize(result.data),
    }
  }

  public removeTask = async (id: number): Response<null> => {
    const validation = z.object({ id: schema.id }).safeParse({ id })

    if (!validation.success) {
      return validation
    }

    const task = await new GetTask(this.taskRepository).execute(id)

    if (!task.success) {
      return task
    }

    const result = await new RemoveTask(this.taskRepository).execute(
      validation.data.id,
    )

    if (!result.success) {
      return result
    }

    return {
      success: true,
      data: null,
    }
  }
}
