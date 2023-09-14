'use strict'

const commonjs = require('@rollup/plugin-commonjs')
const configRollup = require('./rollup.bundle.js')

const config = {
  ...configRollup,
  input: 'js/tests/integration/bundle-modularity.js',
  output: {
    file: 'js/coverage/bundle-modularity.js',
    format: 'iife'
  }
}

config.plugins.unshift(commonjs())

module.exports = config
