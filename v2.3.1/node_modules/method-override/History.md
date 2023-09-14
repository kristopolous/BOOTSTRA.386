2.0.2 / 2014-06-05
==================

  * use vary module for better `Vary` behavior

2.0.1 / 2014-06-02
==================

  * deps: methods@1.0.1

2.0.0 / 2014-06-01
==================

  * Default behavior only checks `X-HTTP-Method-Override` header
  * New interface, less magic
    - Can specify what header to look for override in, if wanted
    - Can specify custom function to get method from request
  * Only `POST` requests are examined by default
  * Remove `req.body` support for more standard query param support
    - Use custom `getter` function if `req.body` support is needed
  * Set `Vary` header when using built-in header checking

1.0.2 / 2014-05-22
==================

  * Handle `req.body` key referencing array or object
  * Handle multiple HTTP headers

1.0.1 / 2014-05-17
==================

  * deps: pin dependency versions

1.0.0 / 2014-03-03
==================

  * Genesis from `connect`
