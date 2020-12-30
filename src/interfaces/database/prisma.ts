import { PrismaClient } from '@prisma/client'

export type Prisma = typeof prisma

export const prisma = new PrismaClient({
  // @todo development only
  log: ['query', 'info', 'warn'],
})
