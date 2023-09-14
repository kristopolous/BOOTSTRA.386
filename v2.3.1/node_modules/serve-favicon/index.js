/*!
 * serve-favicon
 * Copyright(c) 2010 Sencha Inc.
 * Copyright(c) 2011 TJ Holowaychuk
 * Copyright(c) 2014 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var crypto = require('crypto');
var fresh = require('fresh');
var fs = require('fs');
var path = require('path');
var resolve = path.resolve;

/**
 * Serves the favicon located by the given `path`.
 *
 * @param {String|Buffer} path
 * @param {Object} options
 * @return {Function} middleware
 * @api public
 */

module.exports = function favicon(path, options){
  options = options || {};

  var buf;
  var icon; // favicon cache
  var maxAge = options.maxAge == null
    ? 86400000
    : Math.min(Math.max(0, options.maxAge), 31556926000);
  var stat;

  if (!path) throw new TypeError('path to favicon.ico is required');

  if (Buffer.isBuffer(path)) {
    buf = new Buffer(path.length);
    path.copy(buf);

    icon = createIcon(buf, maxAge);
  } else if (typeof path === 'string') {
    path = resolve(path);
    stat = fs.statSync(path);
    if (stat.isDirectory()) throw createIsDirError(path);
  } else {
    throw new TypeError('path to favicon.ico must be string or buffer');
  }

  return function favicon(req, res, next){
    if ('/favicon.ico' !== req.url) return next();

    if ('GET' !== req.method && 'HEAD' !== req.method) {
      var status = 'OPTIONS' === req.method ? 200 : 405;
      res.writeHead(status, {'Allow': 'GET, HEAD, OPTIONS'});
      res.end();
      return;
    }

    if (icon) return send(req, res, icon);

    fs.readFile(path, function(err, buf){
      if (err) return next(err);
      icon = createIcon(buf, maxAge);
      send(req, res, icon);
    });
  };
};

function createIcon(buf, maxAge) {
  return {
    body: buf,
    headers: {
      'Content-Type': 'image/x-icon',
      'Content-Length': buf.length,
      'Cache-Control': 'public, max-age=' + ~~(maxAge / 1000),
      'etag': etag(buf)
    }
  };
}

function createIsDirError(path) {
  var error = new Error('EISDIR, illegal operation on directory \'' + path + '\'');
  error.code = 'EISDIR';
  error.errno = 28;
  error.path = path;
  error.syscall = 'open';
  return error;
}

function etag(buf){
  var hash = crypto
    .createHash('md5')
    .update(buf)
    .digest('base64');
  return '"' + hash + '"';
}

function send(req, res, icon){
  var _fresh = fresh(req.headers, icon.headers);
  var buf = _fresh ? '' : icon.body;
  var status = _fresh ? 304 : 200;

  res.writeHead(status, icon.headers);
  res.end(buf);
}
