# connect-timeout

[![NPM version](https://badge.fury.io/js/connect-timeout.svg)](http://badge.fury.io/js/connect-timeout)
[![Build Status](https://travis-ci.org/expressjs/timeout.svg?branch=master)](https://travis-ci.org/expressjs/timeout)

Times out the request in `ms`, defaulting to `5000`.

## Install

```sh
$ npm install connect-timeout
```

## API

**NOTE** This module is not recommend as a "top-level" middleware (i.e. `app.use(timeout(5000))`) unless
you take precautions to halt your own middleware processing. See [as top-level middleware](#as-top-level-middleware)
for how to use as a top-level middleware.

### timeout(ms, options)

Returns middleware that times out in `ms` milliseconds. On timeout, `req` will emit `"timeout"`.

#### options

* `respond` - If `true`, the timeout error is passed to `next()` so that you may customize the response behavior. This error has a `.timeout` property as well as `.status == 503`. This defaults to `true`.

### req.clearTimeout()

Clears the timeout on the request.

### req.timedout

`true` if timeout fired; `false` otherwise.

## Examples

### as top-level middleware

Because of the way middleware processing works, this once this module passes the request
to the next middleware (which it has to do in order for you to do work), it can no longer
stop the flow, so you must take care to check if the request has timedout before you
continue to act on the request.

```javascript
var express = require('express');
var timeout = require('connect-timeout');

// example of using this top-level; note the use of haltOnTimedout
// after every middleware; it will stop the request flow on a timeout
var app = express();
app.use(timeout(5000));
app.use(bodyParser());
app.use(haltOnTimedout);
app.use(cookieParser());
app.use(haltOnTimedout);

// Add your routes here, etc.

function haltOnTimedout(req, res, next){
  if (!req.timedout) next();
}

app.listen(3000);
```

### express 3.x

```javascript
var express = require('express');
var bodyParser = require('body-parser');
var timeout = require('connect-timeout');

var app = express();
app.post('/save', timeout(5000), bodyParser.json(), haltOnTimedout, function(req, res, next){
  savePost(req.body, function(err, id){
    if (err) return next(err);
    if (req.timedout) return;
    res.send('saved as id ' + id);
  });
});

function haltOnTimedout(req, res, next){
  if (!req.timedout) next();
}

function savePost(post, cb){
  setTimeout(function(){
    cb(null, ((Math.random()* 40000) >>> 0));
  }, (Math.random()* 7000) >>> 0));
}

app.listen(3000);
```

### connect

```javascript
var bodyParser = require('body-parser');
var connect = require('connect');
var timeout = require('connect-timeout');

var app = require('connect');
app.use('/save', timeout(5000), bodyParser.json(), haltOnTimedout, function(req, res, next){
  savePost(req.body, function(err, id){
    if (err) return next(err);
    if (req.timedout) return;
    res.send('saved as id ' + id);
  });
});

function haltOnTimedout(req, res, next){
  if (!req.timedout) next();
}

function savePost(post, cb){
  setTimeout(function(){
    cb(null, ((Math.random()* 40000) >>> 0));
  }, (Math.random()* 7000) >>> 0));
}

app.listen(3000);
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
