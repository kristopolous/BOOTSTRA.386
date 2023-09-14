
/*!
 * Connect - session - MemoryStore
 * Copyright(c) 2010 Sencha Inc.
 * Copyright(c) 2011 TJ Holowaychuk
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var Store = require('./store');

/**
 * Shim setImmediate for node.js < 0.10
 */

/* istanbul ignore next */
var defer = typeof setImmediate === 'function'
  ? setImmediate
  : function(fn){ process.nextTick(fn.bind.apply(fn, arguments)) }

/**
 * Initialize a new `MemoryStore`.
 *
 * @api public
 */

var MemoryStore = module.exports = function MemoryStore() {
  this.sessions = {};
};

/**
 * Inherit from `Store.prototype`.
 */

MemoryStore.prototype.__proto__ = Store.prototype;

/**
 * Attempt to fetch session by the given `sid`.
 *
 * @param {String} sid
 * @param {Function} fn
 * @api public
 */

MemoryStore.prototype.get = function(sid, fn){
  var self = this;
  var sess = self.sessions[sid];

  if (!sess) {
    return defer(fn);
  }

  // parse
  sess = JSON.parse(sess);

  var expires = typeof sess.cookie.expires === 'string'
    ? new Date(sess.cookie.expires)
    : sess.cookie.expires;

  // destroy expired session
  if (expires && expires <= Date.now()) {
    return self.destroy(sid, fn);
  }

  defer(fn, null, sess);
};

/**
 * Commit the given `sess` object associated with the given `sid`.
 *
 * @param {String} sid
 * @param {Session} sess
 * @param {Function} fn
 * @api public
 */

MemoryStore.prototype.set = function(sid, sess, fn){
  this.sessions[sid] = JSON.stringify(sess);
  fn && defer(fn);
};

/**
 * Destroy the session associated with the given `sid`.
 *
 * @param {String} sid
 * @api public
 */

MemoryStore.prototype.destroy = function(sid, fn){
  delete this.sessions[sid];
  fn && defer(fn);
};

/**
 * Invoke the given callback `fn` with all active sessions.
 *
 * @param {Function} fn
 * @api public
 */

MemoryStore.prototype.all = function(fn){
  var arr = []
    , keys = Object.keys(this.sessions);
  for (var i = 0, len = keys.length; i < len; ++i) {
    arr.push(this.sessions[keys[i]]);
  }
  fn && defer(fn);
};

/**
 * Clear all sessions.
 *
 * @param {Function} fn
 * @api public
 */

MemoryStore.prototype.clear = function(fn){
  this.sessions = {};
  fn && defer(fn);
};

/**
 * Fetch number of sessions.
 *
 * @param {Function} fn
 * @api public
 */

MemoryStore.prototype.length = function(fn){
  var len = Object.keys(this.sessions).length;
  defer(fn, null, len);
};
