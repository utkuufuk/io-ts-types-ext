import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/lib/function'
import moment from 'moment-timezone'

import { MomentFromString } from './moment'

describe('moment', () => {
  const TEST_MOMENT_STR = '2022-12-22T01:23:45.000Z'

  describe('MomentFromString', () => {
    it('encodes', () => {
      const encoded = MomentFromString.encode(moment(TEST_MOMENT_STR))
      expect(encoded).toEqual(TEST_MOMENT_STR)
    })

    it('decodes valid moment from string', () => {
      pipe(
        TEST_MOMENT_STR,
        MomentFromString.decode,
        E.fold(
          err => {
            throw new Error(`Unexpected error: ${err}`)
          },
          m => {
            expect(m.isSame(moment(TEST_MOMENT_STR))).toBe(true)
          },
        ),
      )
    })

    it('returns error when decoding valid moment object instead of its string representation', done => {
      pipe(
        moment(TEST_MOMENT_STR),
        MomentFromString.decode,
        E.fold(
          _ => {
            done()
          },
          _ => {
            throw new Error('Decode should have failed!')
          },
        ),
      )
    })

    it('returns error when decoding invalid moment from string', done => {
      const str = '20221222012345000'
      pipe(
        str,
        MomentFromString.decode,
        E.fold(
          _ => {
            done()
          },
          _ => {
            throw new Error('Decode should have failed!')
          },
        ),
      )
    })
  })
})
