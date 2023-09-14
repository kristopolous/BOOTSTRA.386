1.5.2 / 2014-06-26
==================

  * deps: cookie-signature@1.0.4
    - fix for timing attacks

1.5.1 / 2014-06-21
==================

  * Move hard-to-track-down `req.secret` deprecation message

1.5.0 / 2014-06-19
==================

  * Debug name is now "express-session"
  * Deprecate integration with `cookie-parser` middleware
  * Deprecate looking for secret in `req.secret`
  * Directly read cookies; `cookie-parser` no longer required
  * Directly set cookies; `res.cookie` no longer required
  * Generate session IDs with `uid-safe`, faster and even less collisions

1.4.0 / 2014-06-17
==================

  * Add `genid` option to generate custom session IDs
  * Add `saveUninitialized` option to control saving uninitialized sessions
  * Add `unset` option to control unsetting `req.session`
  * Generate session IDs with `rand-token` by default; reduce collisions
  * deps: buffer-crc32@0.2.3

1.3.1 / 2014-06-14
==================

  * Add description in package for npmjs.org listing

1.3.0 / 2014-06-14
==================

  * Integrate with express "trust proxy" by default
  * deps: debug@1.0.2

1.2.1 / 2014-05-27
==================

  * Fix `resave` such that `resave: true` works

1.2.0 / 2014-05-19
==================

  * Add `resave` option to control saving unmodified sessions

1.1.0 / 2014-05-12
==================

  * Add `name` option; replacement for `key` option
  * Use `setImmediate` in MemoryStore for node.js >= 0.10

1.0.4 / 2014-04-27
==================

  * deps: debug@0.8.1

1.0.3 / 2014-04-19
==================

  *  Use `res.cookie()` instead of `res.setHeader()`
  * deps: cookie@0.1.2

1.0.2 / 2014-02-23
==================

  * Add missing dependency to `package.json`

1.0.1 / 2014-02-15
==================

  * Add missing dependencies to `package.json`

1.0.0 / 2014-02-15
==================

  * Genesis from `connect`
