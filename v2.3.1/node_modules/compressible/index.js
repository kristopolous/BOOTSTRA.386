module.exports = compressible

compressible.specs =
compressible.specifications = require('./specifications.json')

compressible.regex =
compressible.regexp = /json|text|xml/

compressible.get = get

function compressible(type) {
  if (!type || typeof type !== "string") return false
  var i = type.indexOf(';')
  if (~i) type = type.slice(0, i)
  var spec = compressible.specs[type.toLowerCase().trim()]
  return spec ? spec.compressible : compressible.regex.test(type)
}

function get(type) {
  if (!type || typeof type !== "string") return {
    compressible: false,
    notes: "Invalid type."
  }
  var i = type.indexOf(';')
  if (~i) type = type.slice(0, i)
  var spec = compressible.specs[type.toLowerCase().trim()]
  return spec ? spec : {
    compressible: compressible.regex.test(type),
    sources: ["compressible.regex"],
    notes: "Automatically generated via regex."
  }
}
