// @affineplane.dir3
//
// A direction in 3D, represented by the object `{ x, y, z }`.
//
// The direction is basically a unit vector that carries semantics of direction.
// Under a change of the reference frame, the change in translation and scale
// do not affect the direction, only the change in orientation (=attitude) does.
//

exports.almostEqual = require('./almostEqual')
exports.copy = require('./copy')
exports.create = require('./fromSpherical')
exports.fromSpherical = exports.create
exports.fromVector = require('./fromVector')
exports.projectToPlane = require('./projectToPlane')
exports.projectTo = exports.projectToPlane
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.toSpherical = require('./toSpherical')
exports.toVector = require('./toVector')
exports.validate = require('./validate')
