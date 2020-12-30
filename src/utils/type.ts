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
