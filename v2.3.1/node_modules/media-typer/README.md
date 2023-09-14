# media-typer

[![NPM version](https://badge.fury.io/js/media-typer.svg)](https://badge.fury.io/js/media-typer)
[![Build Status](https://travis-ci.org/expressjs/media-typer.svg?branch=master)](https://travis-ci.org/expressjs/media-typer)
[![Coverage Status](https://img.shields.io/coveralls/expressjs/media-typer.svg?branch=master)](https://coveralls.io/r/expressjs/media-typer)

Simple RFC 6838 media type parser

## Installation

```sh
$ npm install media-typer
```

## API

```js
var typer = require('media-typer')
```

### typer.parse(string)

```js
var obj = typer.parse('image/svg+xml; charset=utf-8')
```

Parse a media type string. This will return an object with the following
properties (examples are shown for the string `'image/svg+xml; charset=utf-8'`):

 - `type`: The type of the media type (always lower case). Example: `'image'`

 - `subtype`: The subtype of the media type (always lower case). Example: `'svg'`

 - `suffix`: The suffix of the media type (always lower case). Example: `'xml'`

 - `parameters`: An object of the parameters in the media type (name of parameter always lower case). Example: `{charset: 'utf-8'}`

### typer.parse(req)

```js
var obj = typer.parse(req)
```

Parse the `content-type` header from the given `req`. Short-cut for
`typer.parse(req.headers['content-type'])`.

### typer.parse(res)

```js
var obj = typer.parse(req)
```

Parse the `content-type` header set on the given `res`. Short-cut for
`typer.parse(res.getHeader('content-type'))`.

### typer.format(obj)

```js
var obj = typer.format({type: 'image', subtype: 'svg', suffix: 'xml'})
```

Format an object into a media type string. This will return a string of the
mime type for the given object. For the properties of the object, see the
documentation for `typer.parse(string)`.

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
