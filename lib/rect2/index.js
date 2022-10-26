// affineplane.rect2
//
// Rectangle on a two-dimensional plane. A rectangle is an object
// `{ basis: { a, b, x, y }, size: { w, h } }`, where the basis
// is a transformation from rectangle's inner coordinate system
// to the reference coordinate system.
//

exports.at = require('./at')
exports.atNorm = require('./atNorm')
exports.create = require('./create')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
