// ===================================================
// RECESS
// RULE: Element selectors should not be overqualified
// ===================================================
// Copyright 2012 Twitter, Inc
// Licensed under the Apache License v2.0
// http://www.apache.org/licenses/LICENSE-2.0
// ===================================================

'use strict'

var util = require('../util')
  , RULE = {
      type: 'noOverqualifying'
    , exp: /\b[\w\-\_]+(?=#|\.)/
    , message: 'Element selectors should not be overqualified'
    }

// validation method
module.exports = function (def, data) {

  // default validation to true
  var isValid = true

  // return if no selector to validate
  if (!def.selectors) return isValid

  // loop over selectors
  def.selectors.forEach(function (selector) {

    // evaluate selector to string and trim whitespace
    var selectorString = selector.toCSS().trim()
      , extract
      , line

    // if selector isn't overqualified continue
    if (!RULE.exp.test(selectorString)) return

    // calculate line number for the extract
    line = util.getLine(selector.elements[0].index - selector.elements[0].value.length, data)
    extract = util.padLine(line)

    // highlight selector overqualification
    extract += selectorString.replace(RULE.exp, function ($1) { return $1.magenta })

    // set invalid flag to false
    isValid = false

    // set error object on defintion token
    util.throwError(def, {
      type: RULE.type
    , message: RULE.message
    , extract: extract
    , line: line
    })

  })

  // return validation state
  return isValid
}