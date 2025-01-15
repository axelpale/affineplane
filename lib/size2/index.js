// @affineplane.size2
//
// Two-dimensional rectangular size, consisting of width and height.
//
// Represented with an object `{ w, h }`.
//
// Note that size is invariant under rotation.
// Consider using box2 to maintain rotation and position data of a rectangular size.
//
exports.almostEqual = require('./almostEqual')
exports.area = require('./area')
exports.atNorm = require('./atNorm')
exports.create = require('./create')
exports.equal = require('./equal')
exports.scaleBy = require('./scaleBy')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.validate = require('./validate')
