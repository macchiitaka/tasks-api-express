import { TasksController } from '../interfaces/controllers/tasks-controller'
import { prisma } from '../interfaces/database/prisma'

export const taskController = new TasksController(prisma)
