import * as t from 'io-ts'

export interface UnsignedBrand {
  readonly Unsigned: unique symbol
}

export const Unsigned = t.brand(
  t.number,
  (n): n is t.Branded<number, UnsignedBrand> => n >= 0,
  'Unsigned',
)
