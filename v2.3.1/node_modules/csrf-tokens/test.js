
var assert = require('assert')

var csrf = require('./')()

describe('CSRF Tokens', function () {
  var secret

  describe('.secret()', function () {
    it('should return a string', function () {
      secret = csrf.secretSync()
      assert.equal('string', typeof secret)

      return csrf.secret().then(function (secret) {
        assert.equal('string', typeof secret)
      })
    })

    it('should create a secret asynchronously', function (done) {
      csrf.secret(function (err, secret) {
        assert.ifError(err)
        assert.equal('string', typeof secret)
        done()
      })
    })
  })

  describe('.create()', function () {
    it('should create a token synchronously', function () {
      var token = csrf.create(secret)
      assert.equal('string', typeof token)
      assert(~token.indexOf('-'))
    })

    it('should not contain /, +, or =', function () {
      for (var i = 0; i < 1000; i++) {
        var token = csrf.create(secret)
        assert(!~token.indexOf('/'))
        assert(!~token.indexOf('+'))
        assert(!~token.indexOf('='))
      }
    })
  })

  describe('.verify()', function () {
    it('should return `true` with valid tokens', function () {
      var token = csrf.create(secret)
      assert(csrf.verify(secret, token))
    })

    it('should return `false` with invalid tokens', function () {
      var token = csrf.create(secret)
      assert(!csrf.verify(csrf.secretSync(), token))
      assert(!csrf.verify('asdfasdfasdf', token))
    })

    it('should return `false` with invalid tokens', function () {
      assert(!csrf.verify(secret, undefined))
      assert(!csrf.verify(secret, []))
    })
  })
})
