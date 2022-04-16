import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import * as t from 'io-ts'
import moment, { Moment } from 'moment-timezone'

export const MomentFromString = new t.Type<Moment, string, unknown>(
  'MomentFromString',
  (s): s is Moment => typeof s === 'string' && moment.utc(s).isValid(),
  (s, ctx) =>
    pipe(
      t.string.validate(s, ctx),
      E.chain(s => {
        const m = moment.utc(s)
        return m.isValid() ? t.success(m) : t.failure(s, ctx)
      }),
    ),
  m => m.toJSON(),
)
export type MomentFromString = t.TypeOf<typeof MomentFromString>
