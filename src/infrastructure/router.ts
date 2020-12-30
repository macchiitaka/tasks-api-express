import express from 'express'

import * as tasksHandler from './handlers/tasks-handlers'
import * as PATH from './path'

const router: express.Router = express.Router()

router.get(PATH.TASKS, tasksHandler.listTasks)
router.get(PATH.TASK, tasksHandler.getTask)
router.post(PATH.TASKS, tasksHandler.createTask)
router.put(PATH.TASK, tasksHandler.replaceTask)
router.delete(PATH.TASK, tasksHandler.removeTask)

export { router }
