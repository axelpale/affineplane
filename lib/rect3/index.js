// @affineplane.rect3
//
// DEPRECATED in v2.10. Will be removed in v3.0. Use box3 instead.
//
// A rectangle, floating in three dimensions. A rect3 is an object
// `{ basis: { a, b, x, y, z }, size: { w, h } }`, where the basis
// is a helm3 - a Helmert transformation from rectangle's inner coordinate
// system to the reference coordinate system.
//

exports.at = require('./at')
exports.atNorm = require('./atNorm')
exports.create = require('./create')
exports.getArea = require('./getArea')
exports.getBounds = require('./getBounds')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
