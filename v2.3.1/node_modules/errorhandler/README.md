# errorhandler

[![NPM version](https://badge.fury.io/js/errorhandler.svg)](http://badge.fury.io/js/errorhandler)
[![Build Status](https://travis-ci.org/expressjs/errorhandler.svg?branch=master)](https://travis-ci.org/expressjs/errorhandler)
[![Coverage Status](https://img.shields.io/coveralls/expressjs/errorhandler.svg?branch=master)](https://coveralls.io/r/expressjs/errorhandler)

Previously `connect.errorHandler()`.

## Install

```sh
$ npm install errorhandler
```

## API

### errorhandler()

Create new middleware to handle errors and respond with content negotiation.
This middleware is only intended to be used in a development environment, as
the full error stack traces will be send back to the client when an error
occurs.

## Example

```js
var connect = require('connect')
var errorhandler = require('errorhandler')

var app = connect()

if (process.env.NODE_ENV === 'development') {
  app.use(errorhandler())
}
```

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
