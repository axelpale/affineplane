// @affineplane.size3
//
// Three-dimensional cuboid size, consisting of width, height, and depth.
//
// Represented with an object `{ w, h, d }`.
//
// Note that sizes are invariant under rotation.
// Consider using box3 to track position and rotation of a rectangular size.
//
exports.almostEqual = require('./almostEqual')
exports.atNorm = require('./atNorm')
exports.create = require('./create')
exports.equal = require('./equal')
exports.scaleBy = require('./scaleBy')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.validate = require('./validate')
exports.volume = require('./volume')
