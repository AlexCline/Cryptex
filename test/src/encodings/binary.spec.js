/*
 * Copyright (c) 2015-1016 TechnologyAdvice
 */

'use strict'

const toBuffer = require('src/encodings/binary')

describe('Binary Encoding', () => {
  it('returns the same buffer that was provided', () => {
    let buf = toBuffer(new Buffer('foo'))
    should.exist(buf)
    buf.should.be.instanceof(Buffer)
    buf.toString().should.equal('foo')
  })
})
