1.4.3 / 2014-06-19
==================

  * deps: type-is@1.3.1
    - fix global variable leak

1.4.2 / 2014-06-19
==================

  * deps: type-is@1.3.0
    - improve type parsing

1.4.1 / 2014-06-19
==================

  * fix urlencoded extended deprecation message

1.4.0 / 2014-06-19
==================

  * add `text` parser
  * add `raw` parser
  * check accepted charset in content-type (accepts utf-8)
  * check accepted encoding in content-encoding (accepts identity)
  * deprecate `bodyParser()` middleware; use `.json()` and `.urlencoded()` as needed
  * deprecate `urlencoded()` without provided `extended` option
  * lazy-load urlencoded parsers
  * parsers split into files for reduced mem usage
  * support gzip and deflate bodies
    - set `inflate: false` to turn off
  * deps: raw-body@1.2.2
    - Support all encodings from `iconv-lite`

1.3.1 / 2014-06-11
==================

  * deps: type-is@1.2.1
    - Switch dependency from mime to mime-types@1.0.0

1.3.0 / 2014-05-31
==================

  * add `extended` option to urlencoded parser

1.2.2 / 2014-05-27
==================

  * deps: raw-body@1.1.6
    - assert stream encoding on node.js 0.8
    - assert stream encoding on node.js < 0.10.6
    - deps: bytes@1

1.2.1 / 2014-05-26
==================

  * invoke `next(err)` after request fully read
    - prevents hung responses and socket hang ups

1.2.0 / 2014-05-11
==================

  * add `verify` option
  * deps: type-is@1.2.0
    - support suffix matching

1.1.2 / 2014-05-11
==================

  * improve json parser speed

1.1.1 / 2014-05-11
==================

  * fix repeated limit parsing with every request

1.1.0 / 2014-05-10
==================

  * add `type` option
  * deps: pin for safety and consistency

1.0.2 / 2014-04-14
==================

  * use `type-is` module

1.0.1 / 2014-03-20
==================

  * lower default limits to 100kb
