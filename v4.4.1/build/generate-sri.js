#!/usr/bin/env node

/*!
 * Script to generate SRI hashes for use in our docs.
 * Remember to use the same vendor files as the CDN ones,
 * otherwise the hashes won't match!
 *
 * Copyright 2017-2019 The Bootstrap Authors
 * Copyright 2017-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

'use strict'

const crypto = require('crypto')
const fs = require('fs')
const path = require('path')
const sh = require('shelljs')

const pkg = require('../package.json')

sh.config.fatal = true

const configFile = path.join(__dirname, '../_config.yml')

// Array of objects which holds the files to generate SRI hashes for.
// `file` is the path from the root folder
// `configPropertyName` is the _config.yml variable's name of the file
const files = [
  {
    file: 'dist/css/bootstrap.min.css',
    configPropertyName: 'css_hash'
  },
  {
    file: 'dist/js/bootstrap.min.js',
    configPropertyName: 'js_hash'
  },
  {
    file: 'dist/js/bootstrap.bundle.min.js',
    configPropertyName: 'js_bundle_hash'
  },
  {
    file: `site/docs/${pkg.version_short}/assets/js/vendor/jquery.slim.min.js`,
    configPropertyName: 'jquery_hash'
  },
  {
    file: 'node_modules/popper.js/dist/umd/popper.min.js',
    configPropertyName: 'popper_hash'
  }
]

files.forEach((file) => {
  fs.readFile(file.file, 'utf8', (err, data) => {
    if (err) {
      throw err
    }

    const algo = 'sha384'
    const hash = crypto.createHash(algo).update(data, 'utf8').digest('base64')
    const integrity = `${algo}-${hash}`

    console.log(`${file.configPropertyName}: ${integrity}`)

    sh.sed('-i', new RegExp(`(\\s${file.configPropertyName}:\\s+"|')(\\S+)("|')`), `$1${integrity}$3`, configFile)
  })
})
