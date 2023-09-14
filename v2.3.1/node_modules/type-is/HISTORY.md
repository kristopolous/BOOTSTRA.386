
1.3.2 / 2014-06-24
==================

 * use `~` range on mime-types
 
1.3.1 / 2014-06-19
==================

 * fix global variable leak

1.3.0 / 2014-06-19
==================

 * improve type parsing

   - invalid media type never matches
   - media type not case-sensitive
   - extra LWS does not affect results

1.2.2 / 2014-06-19
==================

 * fix behavior on unknown type argument

1.2.1 / 2014-06-03
==================

 * switch dependency from `mime` to `mime-types@1.0.0`

1.2.0 / 2014-05-11
==================

 * support suffix matching:

   - `+json` matches `application/vnd+json`
   - `*/vnd+json` matches `application/vnd+json`
   - `application/*+json` matches `application/vnd+json`

1.1.0 / 2014-04-12
==================

 * add non-array values support
 * expose internal utilities:

   - `.is()`
   - `.hasBody()`
   - `.normalize()`
   - `.match()`

1.0.1 / 2014-03-30
==================

 * add `multipart` as a shorthand
