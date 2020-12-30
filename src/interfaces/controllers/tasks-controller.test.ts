import { schema } from './tasks-controller'

describe('tasks-controller', () => {
  describe('validators', () => {
    describe('id', () => {
      test.each([
        [-1, false],
        [0, false],
        [1, true],
        [2 ** 16, true],
        [1.23, false],
        [Number.NaN, false],
        [Number.POSITIVE_INFINITY, false],
        ['', false],
        ['String', false],
        ['a'.repeat(2 ** 16), false],
        ['a'.repeat(2 ** 16 + 1), false],
        [true, false],
        [{}, false],
        [[], false],
        [() => {}, false],
      ])('validate %j', (value, expected) => {
        expect(schema.id.safeParse(value).success).toBe(expected)
      })
    })

    describe('title', () => {
      test.each([
        [-1, false],
        [0, false],
        [1, false],
        [2 ** 16, false],
        [1.23, false],
        [Number.NaN, false],
        [Number.POSITIVE_INFINITY, false],
        ['', true],
        ['String', true],
        ['a'.repeat(2 ** 16), true],
        ['a'.repeat(2 ** 16 + 1), false],
        [true, false],
        [{}, false],
        [[], false],
        [() => {}, false],
      ])('validate %s', (value, expected) => {
        expect(schema.title.safeParse(value).success).toBe(expected)
      })
    })

    describe('done', () => {
      test.each([
        [-1, false],
        [0, false],
        [1, false],
        [2 ** 16, false],
        [1.23, false],
        [Number.NaN, false],
        [Number.POSITIVE_INFINITY, false],
        ['', false],
        ['String', false],
        ['a'.repeat(2 ** 16), false],
        ['a'.repeat(2 ** 16 + 1), false],
        [true, true],
        [{}, false],
        [[], false],
        [() => {}, false],
      ])('validate %s', (value, expected) => {
        expect(schema.done.safeParse(value).success).toBe(expected)
      })
    })
  })
})
