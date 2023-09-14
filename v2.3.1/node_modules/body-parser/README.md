# body-parser

[![NPM version](https://badge.fury.io/js/body-parser.svg)](https://badge.fury.io/js/body-parser)
[![Build Status](https://travis-ci.org/expressjs/body-parser.svg?branch=master)](https://travis-ci.org/expressjs/body-parser)
[![Coverage Status](https://img.shields.io/coveralls/expressjs/body-parser.svg?branch=master)](https://coveralls.io/r/expressjs/body-parser)

Node.js body parsing middleware.

This does not handle multipart bodies, due to their complex and typically large nature. For multipart bodies, you may be interested in the following modules:

- [busboy](https://www.npmjs.org/package/busboy#readme) and [connect-busboy](https://www.npmjs.org/package/connect-busboy#readme)
- [multiparty](https://www.npmjs.org/package/multiparty#readme) and [connect-multiparty](https://www.npmjs.org/package/connect-multiparty#readme)
- [formidable](https://www.npmjs.org/package/formidable#readme)
- [multer](https://www.npmjs.org/package/multer#readme)

Other body parsers you might be interested in:

- [body](https://www.npmjs.org/package/body#readme)
- [co-body](https://www.npmjs.org/package/co-body#readme)

## Installation

```sh
$ npm install body-parser
```

## API

```js
var express    = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.use(function (req, res, next) {
  console.log(req.body) // populated!
  next()
})
```

### bodyParser.json(options)

Returns middleware that only parses `json`. This parser accepts any Unicode encoding of the body and supports automatic inflation of `gzip` and `deflate` encodings.

The options are:

- `strict` - only parse objects and arrays. (default: `true`)
- `inflate` - if deflated bodies will be inflated. (default: `true`)
- `limit` - maximum request body size. (default: `<100kb>`)
- `reviver` - passed to `JSON.parse()`
- `type` - request content-type to parse (default: `json`)
- `verify` - function to verify body content

The `type` argument is passed directly to the [type-is](https://www.npmjs.org/package/type-is#readme) library. This can be an extension name (like `json`), a mime type (like `application/json`), or a mime time with a wildcard (like `*/json`).

The `verify` argument, if supplied, is called as `verify(req, res, buf, encoding)`, where `buf` is a `Buffer` of the raw request body and `encoding` is the encoding of the request. The parsing can be aborted by throwing an error.

The `reviver` argument is passed directly to `JSON.parse` as the second argument. You can find more information on this argument [in the MDN documentation about JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Example.3A_Using_the_reviver_parameter).

### bodyParser.raw(options)

Returns middleware that parses all bodies as a `Buffer`. This parser supports automatic inflation of `gzip` and `deflate` encodings.

The options are:

- `inflate` - if deflated bodies will be inflated. (default: `true`)
- `limit` - maximum request body size. (default: `<100kb>`)
- `type` - request content-type to parse (default: `application/octet-stream`)
- `verify` - function to verify body content

The `type` argument is passed directly to the [type-is](https://www.npmjs.org/package/type-is#readme) library. This can be an extension name (like `bin`), a mime type (like `application/octet-stream`), or a mime time with a wildcard (like `application/*`).

The `verify` argument, if supplied, is called as `verify(req, res, buf, encoding)`, where `buf` is a `Buffer` of the raw request body and `encoding` is the encoding of the request. The parsing can be aborted by throwing an error.

### bodyParser.text(options)

Returns middleware that parses all bodies as a string. This parser supports automatic inflation of `gzip` and `deflate` encodings.

The options are:

- `defaultCharset` - the default charset to parse as, if not specified in content-type. (default: `utf-8`)
- `inflate` - if deflated bodies will be inflated. (default: `true`)
- `limit` - maximum request body size. (default: `<100kb>`)
- `type` - request content-type to parse (default: `text/plain`)
- `verify` - function to verify body content

The `type` argument is passed directly to the [type-is](https://www.npmjs.org/package/type-is#readme) library. This can be an extension name (like `txt`), a mime type (like `text/plain`), or a mime time with a wildcard (like `text/*`).

The `verify` argument, if supplied, is called as `verify(req, res, buf, encoding)`, where `buf` is a `Buffer` of the raw request body and `encoding` is the encoding of the request. The parsing can be aborted by throwing an error.

### bodyParser.urlencoded(options)

Returns middleware that only parses `urlencoded` bodies. This parser accepts only UTF-8 encoding of the body and supports automatic inflation of `gzip` and `deflate` encodings.

The options are:

- `extended` - parse extended syntax with the [qs](https://www.npmjs.org/package/qs#readme) module. (default: `true`)
- `inflate` - if deflated bodies will be inflated. (default: `true`)
- `limit` - maximum request body size. (default: `<100kb>`)
- `type` - request content-type to parse (default: `urlencoded`)
- `verify` - function to verify body content

The `extended` argument allows to choose between parsing the urlencoded data with the `querystring` library (when `false`) or the `qs` library (when `true`). The "extended" syntax allows for rich objects and arrays to be encoded into the urlencoded format, allowing for a JSON-like exterience with urlencoded. For more information, please [see the qs library](https://www.npmjs.org/package/qs#readme).

The `type` argument is passed directly to the [type-is](https://www.npmjs.org/package/type-is#readme) library. This can be an extension name (like `urlencoded`), a mime type (like `application/x-www-form-urlencoded`), or a mime time with a wildcard (like `*/x-www-form-urlencoded`).

The `verify` argument, if supplied, is called as `verify(req, res, buf, encoding)`, where `buf` is a `Buffer` of the raw request body and `encoding` is the encoding of the request. The parsing can be aborted by throwing an error.

### req.body

A new `body` object containing the parsed data is populated on the `request` object after the middleware.

## License

The MIT License (MIT)

Copyright (c) 2014 Jonathan Ong me@jongleberry.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
