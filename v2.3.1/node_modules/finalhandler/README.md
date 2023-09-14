# finalhandler

[![NPM version](https://badge.fury.io/js/finalhandler.svg)](https://badge.fury.io/js/finalhandler)
[![Build Status](https://travis-ci.org/expressjs/finalhandler.svg?branch=master)](https://travis-ci.org/expressjs/finalhandler)
[![Coverage Status](https://img.shields.io/coveralls/expressjs/finalhandler.svg?branch=master)](https://coveralls.io/r/expressjs/finalhandler)

Node.js function to invoke as the final step to respond to HTTP request.

## Installation

```sh
$ npm install finalhandler
```

## API

```js
var finalhandler = require('finalhandler')
```

### finalhandler(req, res, [options])

Returns function to be invoked as the final step for the given `req` and `res`.
This function is to be invoked as `fn(err)`. If `err` is falsy, the handler will
write out a 404 response to the `res`. If it is truthy, an error response will
be written out to the `res`, and `res.statusCode` is set from `err.status`.

#### options.env

By default, the environment is determined by `NODE_ENV` variable, but it can be
overridden by this option.

#### options.onerror

Provide a function to be called with the `err` when it exists. Can be used for
writing errors to a central location without excessive function generation. Called
as `onerror(err, req, res)`.

## Examples

### always 404

```js
var finalhandler = require('finalhandler')
var http = require('http')

var server = http.createServer(function (req, res) {
  var done = finalhandler(req, res)
  done()
})

server.listen(3000)
```

### perform simple action

```js
var finalhandler = require('finalhandler')
var fs = require('fs')
var http = require('http')

var server = http.createServer(function (req, res) {
  var done = finalhandler(req, res)

  fs.readFile('index.html', function (err, buf) {
    if (err) return done(err)
    res.setHeader('Content-Type', 'text/html')
    res.end(buf)
  })
})

server.listen(3000)
```

### use with middleware-style functions

```js
var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

var serve = serveStatic('public')

var server = http.createServer(function (req, res) {
  var done = finalhandler(req, res)
  serve(req, res, done)
})

server.listen(3000)
```

### keep log of all errors

```js
var finalhandler = require('finalhandler')
var fs = require('fs')
var http = require('http')

var server = http.createServer(function (req, res) {
  var done = finalhandler(req, res, {onerror: logerror})

  fs.readFile('index.html', function (err, buf) {
    if (err) return done(err)
    res.setHeader('Content-Type', 'text/html')
    res.end(buf)
  })
})

server.listen(3000)

function logerror(err) {
  console.error(err.stack || err.toString())
}
```

## License

The MIT License (MIT)

Copyright (c) 2014 Douglas Christopher Wilson

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
