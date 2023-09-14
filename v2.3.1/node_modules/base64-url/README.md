# base64-url

Base64 encode, decode, escape and unescape for URL applications.

<a href="https://nodei.co/npm/base64-url/"><img src="https://nodei.co/npm/base64-url.png?downloads=true"></a>

[![Build Status](https://travis-ci.org/joaquimserafim/base64-url.png?branch=master)](https://travis-ci.org/joaquimserafim/base64-url)


## API

```js
var base64url = require('base64-url');

base64url.encode('Node.js is awesome.');
// returns Tm9kZS5qcyBpcyBhd2Vzb21lLg

base64url.decode('Tm9kZS5qcyBpcyBhd2Vzb21lLg');
// returns Node.js is awesome.

base64url.escape('This+is/goingto+escape==');
// returns This-is_goingto-escape

base64url.unescape('This-is_goingto-escape');
// returns This+is/goingto+escape==
```


## Development

**this project has been set up with a precommit that forces you to follow a code style, no jshint issues and 100% of code coverage before commit**


to run test
``` js
npm test
```

to run lint
``` js
npm run lint
```

to run code style
``` js
npm run style
```

to check code coverage
``` js
npm run coverage:check
```
