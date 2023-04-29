// @affineplane.ray3
//
// Ray is like a line but extends into one direction only from the origin.
//
// We represent ray with object { x, y, z, dx, dy, dz }
//

// @affineplane.ray3.ZERO
//
// Invalid ray with origin at zero and zero spanning vector.
//
exports.ZERO = { x: 0, y: 0, z: 0, dx: 0, dy: 0, dz: 0 }

// @affineplane.ray3.DEFAULT
//
// Default ray that has origin at zero and unit span along positive x-axis.
//
exports.DEFAULT = { x: 0, y: 0, z: 0, dx: 1, dy: 0, dz: 0 }

exports.almostEqual = require('./almostEqual')
exports.copy = require('./copy')
exports.create = require('./create')
exports.getOrigin = require('./getOrigin')
exports.getVector = require('./getVector')
exports.homothety = require('./homothety')
exports.invert = require('./invert')
exports.negate = exports.invert
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.validate = require('./validate')
