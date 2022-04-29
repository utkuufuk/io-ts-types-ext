import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import * as t from 'io-ts'

export const DateFromString = new t.Type<Date, string, unknown>(
  'DateFromString',
  (s): s is Date => typeof s === 'string' && !isNaN(new Date(s).getTime()),
  (s, ctx) =>
    pipe(
      t.string.validate(s, ctx),
      E.chain(s => {
        const d = new Date(s)
        return !isNaN(d.getTime()) ? t.success(d) : t.failure(s, ctx)
      }),
    ),
  d => d.toJSON(),
)
export type DateFromString = t.TypeOf<typeof DateFromString>
