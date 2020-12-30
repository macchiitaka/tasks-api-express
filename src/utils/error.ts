import { ZodError } from 'zod'

export class ErrorNotFound extends Error {}

export const switchStatusCode = (error: Error) => {
  if (error instanceof ZodError) {
    return 400
  }

  if (error instanceof ErrorNotFound) {
    return 404
  }

  return 500
}
