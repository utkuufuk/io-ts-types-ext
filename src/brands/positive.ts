import * as t from 'io-ts'

export interface PositiveBrand {
  readonly Positive: unique symbol
}

export const Positive = t.brand(
  t.number,
  (n): n is t.Branded<number, PositiveBrand> => n > 0,
  'Positive',
)
