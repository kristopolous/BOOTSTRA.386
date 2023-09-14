/*!
 * Expressjs | Connect - csrf
 * Copyright(c) 2011 Sencha Inc.
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */

/**
 * CSRF protection middleware.
 *
 * This middleware adds a `req.csrfToken()` function to make a token
 * which should be added to requests which mutate
 * state, within a hidden form field, query-string etc. This
 * token is validated against the visitor's session.
 *
 * @param {Object} options
 * @return {Function} middleware
 * @api public
 */

var ignoreMethod = {
  GET: true,
  HEAD: true,
  OPTIONS: true,
};

module.exports = function csrf(options) {
  options = options || {};
  var value = options.value || defaultValue,
      cookie = options.cookie,
      cookieKey = (cookie && cookie.key) || '_csrf',
      signedCookie = cookie && cookie.signed;

  var tokens = require('csrf-tokens')(options);

  if (cookie && typeof cookie !== 'object')
    cookie = {};

  return function(req, res, next){

    // already have one
    var secret;
    if (cookie) {
      secret = (   (signedCookie
                    && req.signedCookies
                    && req.signedCookies[cookieKey])
                || (!signedCookie
                    && req.cookies
                    && req.cookies[cookieKey])
               );
    } else if (req.session)
      secret = req.session.csrfSecret;
    else {
      var err = new Error('misconfigured csrf');
      err.status = 500;
      next(err);
      return;
    }
    if (secret) return createToken(secret);

    // generate secret
    tokens.secret(function(err, secret){
      if (err) return next(err);
      if (cookie)
        res.cookie(cookieKey, secret, cookie);
      else if (req.session)
        req.session.csrfSecret = secret;
      else {
        var err = new Error('misconfigured csrf');
        err.status = 500;
        next(err);
        return;
      }
      createToken(secret);
    });

    // generate the token
    function createToken(secret) {
      // lazy-load token
      var token;
      req.csrfToken = function csrfToken() {
        return token || (token = tokens.create(secret));
      };

      // ignore these methods
      if (ignoreMethod[req.method]) return next();

      // check user-submitted value
      if (!tokens.verify(secret, value(req))) {
        var err = new Error('invalid csrf token');
        err.status = 403;
        next(err);
        return;
      }

      next();
    }
  }
};

/**
 * Default value function, checking the `req.body`
 * and `req.query` for the CSRF token.
 *
 * @param {IncomingMessage} req
 * @return {String}
 * @api private
 */

function defaultValue(req) {
  return (req.body && req.body._csrf)
    || (req.query && req.query._csrf)
    || (req.headers['x-csrf-token'])
    || (req.headers['x-xsrf-token']);
}
