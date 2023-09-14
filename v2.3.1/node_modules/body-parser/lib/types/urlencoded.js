/*!
 * body-parser
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var bytes = require('bytes')
var deprecate = require('depd')('body-parser')
var read = require('../read')
var typer = require('media-typer')
var typeis = require('type-is')

/**
 * Module exports.
 */

module.exports = urlencoded

/**
 * Cache of parser modules.
 */

var parsers = Object.create(null)

/**
 * Create a middleware to parse urlencoded bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @api public
 */

function urlencoded(options){
  options = options || {};

  // notice because option default will flip in next major
  if (options.extended === undefined) {
    deprecate('urlencoded: explicitly specify "extended: true" for extended parsing')
  }

  var extended = options.extended !== false
  var inflate = options.inflate !== false
  var limit = typeof options.limit !== 'number'
    ? bytes(options.limit || '100kb')
    : options.limit
  var type = options.type || 'urlencoded'
  var verify = options.verify || false

  if (verify !== false && typeof verify !== 'function') {
    throw new TypeError('option verify must be function')
  }

  var queryparse = extended
    ? parser('qs')
    : parser('querystring')

  function parse(body) {
    return body.length
      ? queryparse(body)
      : {}
  }

  return function urlencodedParser(req, res, next) {
    if (req._body) return next();
    req.body = req.body || {}

    if (!typeis(req, type)) return next();

    var charset = typer.parse(req).parameters.charset || 'utf-8'
    if (charset.toLowerCase() !== 'utf-8') {
      var err = new Error('unsupported charset')
      err.status = 415
      next(err)
      return
    }

    // read
    read(req, res, next, parse, {
      encoding: charset,
      inflate: inflate,
      limit: limit,
      verify: verify
    })
  }
}

/**
 * Get parser for module name dynamically.
 *
 * @param {string} name
 * @return {function}
 * @api private
 */

function parser(name) {
  var mod = parsers[name]

  if (mod) {
    return mod.parse
  }

  // load module
  mod = parsers[name] = require(name)

  return mod.parse
}
