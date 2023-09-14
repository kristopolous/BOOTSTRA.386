/*!
 * body-parser
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var getBody = require('raw-body')
var iconv = require('iconv-lite')
var typer = require('media-typer')
var zlib = require('zlib')

/**
 * Module exports.
 */

module.exports = read

/**
 * Read a request into a buffer and parse.
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @param {function} parse
 * @param {object} options
 * @api private
 */

function read(req, res, next, parse, options) {
  var length
  var stream
  var waitend = true

  // flag as parsed
  req._body = true

  try {
    stream = contentstream(req, options.inflate)
    length = stream.length
    delete stream.length
  } catch (err) {
    return next(err)
  }

  options = options || {}
  options.length = length

  var encoding = options.encoding !== null
    ? options.encoding || 'utf-8'
    : null
  var verify = options.verify

  options.encoding = verify
    ? null
    : encoding

  req.on('aborted', cleanup)
  req.on('end', cleanup)
  req.on('error', cleanup)

  // read body
  getBody(stream, options, function (err, body) {
    if (err && waitend && req.readable) {
      // read off entire request
      req.resume()
      req.once('end', function onEnd() {
        next(err)
      })
      return
    }

    if (err) {
      if (!err.status) err.status = 400
      next(err)
      return
    }

    // verify
    if (verify) {
      try {
        verify(req, res, body, encoding)
      } catch (err) {
        if (!err.status) err.status = 403
        return next(err)
      }
    }

    // parse
    try {
      body = typeof body !== 'string' && encoding !== null
        ? iconv.decode(body, encoding)
        : body
      req.body = parse(body)
    } catch (err){
      err.body = body
      err.status = 400
      return next(err)
    }

    next()
  })

  function cleanup() {
    waitend = false
    req.removeListener('aborted', cleanup)
    req.removeListener('end', cleanup)
    req.removeListener('error', cleanup)
  }
}

/**
 * Get the content stream of the request.
 *
 * @param {object} req
 * @param {boolean} [inflate=true]
 * @return {object}
 * @api private
 */

function contentstream(req, inflate) {
  var encoding = req.headers['content-encoding'] || 'identity'
  var err
  var length = req.headers['content-length']
  var stream

  if (inflate === false && encoding !== 'identity') {
    err = new Error('content encoding unsupported')
    err.status = 415
    throw err
  }

  switch (encoding) {
    case 'deflate':
      stream = zlib.createInflate()
      req.pipe(stream)
      break
    case 'gzip':
      stream = zlib.createGunzip()
      req.pipe(stream)
      break
    case 'identity':
      stream = req
      stream.length = length
      break
    default:
      err = new Error('unsupported content encoding')
      err.status = 415
      throw err
  }

  return stream
}
