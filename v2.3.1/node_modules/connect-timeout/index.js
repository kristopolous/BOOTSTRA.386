/*!
 * Expressjs | Connect - timeout
 * Ported from https://github.com/LearnBoost/connect-timeout
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var debug = require('debug')('connect:timeout');
var onHeaders = require('on-headers');

/**
 * Timeout:
 *
 * See README.md for documentation.
 *
 * @param {Number} ms
 * @param {Object} options
 * @return {Function} middleware
 * @api public
 */

module.exports = function timeout(ms, options) {
  ms = ms || 5000;
  options = options || {};

  var respond = !('respond' in options) || options.respond === true;

  return function(req, res, next) {
    var destroy = req.socket.destroy;
    var id = setTimeout(function(){
      req.timedout = true;
      req.emit('timeout', ms);
    }, ms);

    if (respond) {
      req.on('timeout', onTimeout(ms, next));
    }

    req.clearTimeout = function(){
      clearTimeout(id);
    };

    req.socket.destroy = function(){
      clearTimeout(id);
      destroy.call(this);
    };

    req.timedout = false;

    onHeaders(res, function(){
      clearTimeout(id);
    });

    next();
  };
};

function generateTimeoutError(){
  var err = new Error('Response timeout');
  err.code = 'ETIMEDOUT';
  err.status = 503;
  return err;
}

function onTimeout(ms, cb){
  return function(){
    if (this._header) return debug('response started, cannot timeout');
    var err = generateTimeoutError();
    err.timeout = ms;
    cb(err);
  };
}
