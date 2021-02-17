import type { Task as TaskRecord } from '@prisma/client'

import type { TaskRepositoryInterface } from '../../application/repository-interface/task-repository-interface'
import type { TaskModel } from '../../domain/models/task-model'
import { ErrorNotFound } from '../../utils/error'
import type { Prisma } from '../database/prisma'

const convertToModel = (record: TaskRecord): TaskModel => record

/**
 * @todo clean error handlers
 */
export class TaskRepository implements TaskRepositoryInterface {
  private readonly prisma: Prisma

  public constructor(prisma: Prisma) {
    this.prisma = prisma
  }

  public readonly findAll: TaskRepositoryInterface['findAll'] = async () => {
    try {
      const tasks = await this.prisma.task.findMany({
        orderBy: {
          created_at: 'desc',
        },
      })

      await this.prisma.$disconnect()

      return {
        success: true,
        data: tasks.map(convertToModel),
      }
    } catch (error) {
      await this.prisma.$disconnect()

      return {
        success: false,
        error,
      }
    }
  }

  public readonly find: TaskRepositoryInterface['find'] = async (id) => {
    try {
      const task = await this.prisma.task.findUnique({
        where: { id },
      })

      await this.prisma.$disconnect()

      if (!task) {
        return {
          success: false,
          error: new ErrorNotFound(),
        }
      }

      return {
        success: true,
        data: convertToModel(task),
      }
    } catch (error) {
      await this.prisma.$disconnect()

      return {
        success: false,
        error,
      }
    }
  }

  public readonly save: TaskRepositoryInterface['save'] = async (data) => {
    try {
      const task = await this.prisma.task.create({ data })

      await this.prisma.$disconnect()

      return {
        success: true,
        data: convertToModel(task),
      }
    } catch (error) {
      await this.prisma.$disconnect()

      return {
        success: false,
        error,
      }
    }
  }

  public readonly replace: TaskRepositoryInterface['replace'] = async (
    id,
    data,
  ) => {
    try {
      const task = await this.prisma.task.update({ where: { id }, data })

      await this.prisma.$disconnect()

      return {
        success: true,
        data: convertToModel(task),
      }
    } catch (error) {
      await this.prisma.$disconnect()

      return {
        success: false,
        error,
      }
    }
  }

  public readonly delete: TaskRepositoryInterface['delete'] = async (
    id: number,
  ) => {
    try {
      await this.prisma.task.delete({ where: { id } })

      await this.prisma.$disconnect()

      return {
        success: true,
        data: null,
      }
    } catch (error) {
      await this.prisma.$disconnect()

      return {
        success: false,
        error,
      }
    }
  }
}
