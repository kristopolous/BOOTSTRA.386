
# CSRF Tokens

Logic behind CSRF token creation and verification.
Read [Understanding-CSRF](http://www.jongleberry.com/understanding-csrf.html) for more information on CSRF.
Use this module to create custom CSRF middleware and what not.

## API

```js
var tokens = require('csrf-tokens')(options)

var secret = tokens.secretSync()
var token = tokens.create(secret)
var valid = tokens.verify(secret, token)
```

Options:

- `secretLength: 24` - the byte length of the secret key
- `saltLength: 8` - the string length of the salt
- `tokensize: (secret, salt) => token` - a custom token creation function

### tokens.secret([cb])

Asynchronously create a new `secret` of length `secretLength`.
If `cb` is not defined, a promise is returned.
You don't have to use this.

```js
tokens.secret().then(function (secret) {

})

tokens.secret(function (err, secret) {

})
```

### var secret = tokens.secretSync()

Synchronous version of `tokens.secret()`

### var token = tokens.token(secret)

Create a CSRF token based on a `secret`.
This is the token you pass to clients.

### var valid = tokens.verify(secret, token)

Check whether a CSRF token is valid based on a `secret`.
If it's not valid, you should probably throw a `403` error.
