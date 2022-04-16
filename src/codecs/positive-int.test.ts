import * as E from 'fp-ts/Either'

import { PositiveInt, PositiveIntFromString } from './positive-int'

describe('positive-int', () => {
  describe('PositiveInt', () => {
    it('encodes', () => {
      const encoded = PositiveInt.encode(123 as PositiveInt)
      expect(encoded).toEqual(123)
    })

    it('decodes valid positive integer', () => {
      const decoded = PositiveInt.decode(555)
      expect(decoded).toEqual(E.right(555))
    })

    it('returns error when decoding non-positive integer', () => {
      const decoded = PositiveInt.decode(-1)
      expect(E.isLeft(decoded)).toEqual(true)
    })

    it('returns error when decoding non-integer number', () => {
      const decoded = PositiveInt.decode(999.00009)
      expect(E.isLeft(decoded)).toEqual(true)
    })
  })

  describe('PositiveIntFromString', () => {
    it('encodes', () => {
      const encoded = PositiveIntFromString.encode(1 as PositiveInt)
      expect(encoded).toEqual('1')
    })

    it('decodes valid positive integer from string', () => {
      const decoded = PositiveIntFromString.decode('1')
      expect(decoded).toEqual(E.right(1))
    })

    it('returns error when decoding non-positive integer from string', () => {
      const decoded = PositiveIntFromString.decode('0')
      expect(E.isLeft(decoded)).toEqual(true)
    })

    it('returns error when decoding positive non-integer number from string', () => {
      const decoded = PositiveIntFromString.decode('1.1')
      expect(E.isLeft(decoded)).toEqual(true)
    })
  })
})
