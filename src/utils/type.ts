// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FixMe = any

export type Response<T> = Promise<
  | {
      success: true
      data: T
    }
  | {
      success: false
      error: Error
    }
>
