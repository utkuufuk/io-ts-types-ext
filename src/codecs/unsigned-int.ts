import * as t from 'io-ts'
import * as iot from 'io-ts-types'

import { Unsigned } from '../brands/unsigned'

export const UnsignedInt = t.intersection([t.Int, Unsigned], 'UnsignedInt')
export type UnsignedInt = t.TypeOf<typeof UnsignedInt>

export const UnsignedIntFromString = iot.NumberFromString.pipe(UnsignedInt, 'UnsignedIntFromString')
export type UnsignedIntFromString = t.TypeOf<typeof UnsignedIntFromString>
