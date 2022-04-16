import * as E from 'fp-ts/Either'

import { UnsignedInt, UnsignedIntFromString } from './unsigned-int'

describe('unsigned-int', () => {
  describe('UnsignedInt', () => {
    it('encodes', () => {
      const encoded = UnsignedInt.encode(0 as UnsignedInt)
      expect(encoded).toEqual(0)
    })

    it('decodes valid unsigned integer', () => {
      const decoded = UnsignedInt.decode(0)
      expect(decoded).toEqual(E.right(0))
    })

    it('returns error when decoding negative integer', () => {
      const decoded = UnsignedInt.decode(-1)
      expect(E.isLeft(decoded)).toEqual(true)
    })

    it('returns error when decoding non-integer number', () => {
      const decoded = UnsignedInt.decode(999.00009)
      expect(E.isLeft(decoded)).toEqual(true)
    })
  })

  describe('UnsignedIntFromString', () => {
    it('encodes', () => {
      const encoded = UnsignedIntFromString.encode(0 as UnsignedInt)
      expect(encoded).toEqual('0')
    })

    it('decodes valid unsigned integer from string', () => {
      const decoded = UnsignedIntFromString.decode('2')
      expect(decoded).toEqual(E.right(2))
    })

    it('returns error when decoding negative integer from string', () => {
      const decoded = UnsignedIntFromString.decode('-5555')
      expect(E.isLeft(decoded)).toEqual(true)
    })

    it('returns error when decoding unsigned non-integer number from string', () => {
      const decoded = UnsignedIntFromString.decode('0.0001')
      expect(E.isLeft(decoded)).toEqual(true)
    })
  })
})
