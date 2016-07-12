/*
 * Copyright (c) 2015-1016 TechnologyAdvice
 */

'use strict'

const SymmetricAlgo = require('../lib/SymmetricAlgo')

class AES256 extends SymmetricAlgo {
  constructor() {
    super('aes256', 16)
  }
}

module.exports = AES256
