import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'

import { DateFromString } from './date'

describe('date', () => {
  const TEST_DATE_STR = '2022-12-22T01:23:45.000Z'

  describe('DateFromString', () => {
    it('encodes', () => {
      const encoded = DateFromString.encode(new Date(TEST_DATE_STR))
      expect(encoded).toEqual(TEST_DATE_STR)
    })

    it('decodes valid date from string', () => {
      pipe(
        TEST_DATE_STR,
        DateFromString.decode,
        E.fold(
          err => {
            throw new Error(`Unexpected error: ${err}`)
          },
          m => {
            expect(m.getTime() === new Date(TEST_DATE_STR).getTime()).toBe(true)
          },
        ),
      )
    })

    it('returns error when decoding valid date object instead of its string representation', done => {
      pipe(
        new Date(TEST_DATE_STR),
        DateFromString.decode,
        E.fold(
          _ => done(),
          _ => {
            throw new Error('Decode should have failed!')
          },
        ),
      )
    })

    it('returns error when decoding invalid date from string', done => {
      const str = '20221222012345000'
      pipe(
        str,
        DateFromString.decode,
        E.fold(
          _ => done(),
          _ => {
            throw new Error('Decode should have failed!')
          },
        ),
      )
    })
  })
})
