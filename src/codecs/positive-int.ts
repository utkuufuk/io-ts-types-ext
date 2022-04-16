import * as t from 'io-ts'
import * as iot from 'io-ts-types'

import { Positive } from '../brands/positive'

export const PositiveInt = t.intersection([t.Int, Positive], 'PositiveInt')
export type PositiveInt = t.TypeOf<typeof PositiveInt>

export const PositiveIntFromString = iot.NumberFromString.pipe(PositiveInt, 'PositiveIntFromString')
export type PositiveIntFromString = t.TypeOf<typeof PositiveIntFromString>
