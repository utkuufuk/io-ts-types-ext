import * as t from 'io-ts'

export * from './brands/positive'
export * from './brands/unsigned'
export * from './codecs/moment'
export * from './codecs/positive-int'
export * from './codecs/unsigned-int'

export const nullable = <T extends t.Mixed>(codec: T) => t.union([codec, t.nullType])
