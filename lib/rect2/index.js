// @affineplane.rect2
//
// DEPRECATED in v2.10. Will be removed in v3.0. Use box2 instead.
//
// Rectangle on a two-dimensional plane. A rectangle is an object
// `{ basis: { a, b, x, y }, size: { w, h } }`, where the basis
// is a transformation from rectangle's inner coordinate system
// to the reference coordinate system.
//

exports.at = require('./at')
exports.atNorm = require('./atNorm')
exports.create = require('./create')
exports.getArea = require('./getArea')
exports.getBounds = require('./getBounds')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
