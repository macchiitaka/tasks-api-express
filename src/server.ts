import express from 'express'
// import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const PORT = process.env.PORT || 3000

const app: express.Express = express()

// const prisma = new PrismaClient({
//   log: ['query', 'info', 'warn'],
// })

// console.log(prisma)

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//   next()
// })
// @todo set options
app.use(cors({}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router: express.Router = express.Router()

router.get('*', (_: express.Request, response: express.Response) => {
  response.json({ test: process.env.DATABESE_URL })
})

app.use(router)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})
