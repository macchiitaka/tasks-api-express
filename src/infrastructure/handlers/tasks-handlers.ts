import { Request, Response } from 'express'
import { TaskSerialized } from '../../interfaces/serializers/task'
import { taskController } from '../controllers'
import { switchStatusCode } from '../../utils/error'

export const listTasks = async (
  _: Request<unknown, unknown, unknown, unknown>,
  response: Response<{ items: TaskSerialized[] }>,
) => {
  try {
    const result = await taskController.listTasks()

    if (!result.success) {
      response.status(switchStatusCode(result.error)).send()
      return
    }

    response.json(result.data)
  } catch (error) {
    response.status(500).send()
  }
}

export const getTask = async (
  request: Request<{ id?: string }, unknown, unknown, unknown>,
  response: Response<TaskSerialized>,
) => {
  try {
    const result = await taskController.getTask(Number(request.params.id))

    if (!result.success) {
      response.status(switchStatusCode(result.error)).send()
      return
    }

    response.json(result.data)
  } catch (error) {
    response.status(500).send()
  }
}

export const createTask = async (
  request: Request<unknown, unknown, { title?: string }, unknown>,
  response: Response<TaskSerialized>,
) => {
  try {
    const result = await taskController.createTask({
      title: request.body?.title,
    })

    if (!result.success) {
      response.status(switchStatusCode(result.error)).send()
      return
    }

    response.json(result.data)
  } catch (error) {
    response.status(500).send()
  }
}

export const replaceTask = async (
  request: Request<
    { id?: string },
    unknown,
    { title?: any; done?: any },
    unknown
  >,
  response: Response<TaskSerialized>,
) => {
  try {
    const result = await taskController.replaceTask(Number(request.params.id), {
      title: request.body?.title,
      done: request.body?.done,
    })

    if (!result.success) {
      response.status(switchStatusCode(result.error)).send()
      return
    }

    response.json(result.data)
  } catch (error) {
    response.status(500).send()
  }
}

export const removeTask = async (
  request: Request<{ id?: string }, unknown, unknown, unknown>,
  response: Response<void>,
) => {
  try {
    const result = await taskController.removeTask(Number(request.params.id))

    if (!result.success) {
      response.status(switchStatusCode(result.error)).send()
      return
    }

    response.status(204).send()
  } catch (error) {
    response.status(500).send()
  }
}
