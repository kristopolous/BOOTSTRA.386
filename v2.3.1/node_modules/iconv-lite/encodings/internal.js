
// Export Node.js internal encodings.

var utf16lebom = new Buffer([0xFF, 0xFE]);

module.exports = {
    // Encodings
    utf8:   { type: "_internal", enc: "utf8" },
    cesu8:  { type: "_internal", enc: "utf8" },
    unicode11utf8: { type: "_internal", enc: "utf8" },
    ucs2:   { type: "_internal", enc: "ucs2", bom: utf16lebom },
    utf16le:{ type: "_internal", enc: "ucs2", bom: utf16lebom },
    binary: { type: "_internal", enc: "binary" },
    base64: { type: "_internal", enc: "base64" },
    hex:    { type: "_internal", enc: "hex" },

    // Codec.
    _internal: function(options) {
        if (!options || !options.enc)
            throw new Error("Internal codec is called without encoding type.")

        return {
            encoder: encoderInternal,
            decoder: decoderInternal,

            enc: options.enc,
            bom: options.bom,
        };
    },
};

// We use node.js internal decoder. It's signature is the same as ours.
var StringDecoder = require('string_decoder').StringDecoder;

if (!StringDecoder.prototype.end) // Node v0.8 doesn't have this method.
    StringDecoder.prototype.end = function() {};

function decoderInternal() {
    return new StringDecoder(this.enc);
}


function encoderInternal() {
    return {
        write: encodeInternal,
        end: function() {},
        
        enc: this.enc,
    }
}

function encodeInternal(str) {
    return new Buffer(str, this.enc);
}

