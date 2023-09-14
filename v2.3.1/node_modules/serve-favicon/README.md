# serve-favicon

[![NPM version](https://badge.fury.io/js/serve-favicon.svg)](http://badge.fury.io/js/serve-favicon)
[![Build Status](https://travis-ci.org/expressjs/serve-favicon.svg?branch=master)](https://travis-ci.org/expressjs/serve-favicon)
[![Coverage Status](https://img.shields.io/coveralls/expressjs/serve-favicon.svg?branch=master)](https://coveralls.io/r/expressjs/serve-favicon)

Node.js middleware for serving a favicon.

## Install

    npm install serve-favicon

## API

### favicon(path, options)

Create new middleware to serve a favicon from the given `path` to a favicon file.
`path` may also be a `Buffer` of the icon to serve.

#### options

  - `maxAge` - cache-control max-age directive in `ms`, defaulting to 1 day.

## Examples

Typically this middleware will come very early in your stack (maybe even first) to avoid processing any other middleware if we already know the request is for `/favicon.ico`.

### express 3.x/4.x

```javascript
var express = require('express');
var favicon = require('serve-favicon');

var app = express();
app.use(favicon(__dirname + '/public/favicon.ico'));

// Add your routes here, etc.

app.listen(3000);
```

### connect

```javascript
var connect = require('connect');
var favicon = require('serve-favicon');

var app = connect();
app.use(favicon(__dirname + '/public/favicon.ico'));

// Add your middleware here, etc.

app.listen(3000);
```

### vanilla http server

This middleware can be used anywhere, even outside express/connect. It takes `req`, `res`, and `callback`.

```javascript
var http = require('http');
var favicon = require('serve-favicon');

var _favicon = favicon(__dirname + '/public/favicon.ico');

var server = http.createServer(function onRequest(req, res) {
  _favicon(req, res, function onNext(err) {
    if (err) {
      res.statusCode = 500;
      res.end();
      return;
    }

    // continue to process the request here, etc.

    res.statusCode = 404;
    res.end('oops');
  });
});

server.listen(3000);
```

## License

[MIT](LICENSE)
