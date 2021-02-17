import cors from 'cors'
import type { Request } from 'express'
import express from 'express'
import helmet from 'helmet'

import { router } from './router'

const PORT = process.env.PORT ?? 3000

const app: express.Express = express()

/**
 * @see https://expressjs.com/ja/api.html#express.json
 */
app.use(express.json())

/**
 * @see https://expressjs.com/ja/api.html#express.urlencoded
 */
app.use(express.urlencoded({ extended: true }))

// @todo set options
app.use(cors({}))

// @todo set options
app.use(helmet({}))

app.use('/api/v1', router)

app.all(
  '*',
  (
    _: Request<unknown, unknown, unknown, unknown>,
    response: express.Response<void>,
  ) => {
    response.status(404).send()
  },
)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
})
