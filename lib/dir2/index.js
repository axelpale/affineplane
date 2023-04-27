// @affineplane.dir2
//
// A direction on 2D space, represented by the object `{ x, y }`.
//
// A direction is basically a unit vector.
// When a direction is transited between planes, only the rotation of
// the coordinate space affects the direction. Scale change does not affect it.
//
exports.almostEqual = require('./almostEqual')
exports.copy = require('./copy')
exports.create = require('./fromPolar')
exports.fromAngle = exports.create
exports.fromPolar = exports.create
exports.fromVector = require('./fromVector')
exports.projectToPlane = require('./projectToPlane')
exports.projectTo = exports.projectToPlane
exports.toAngle = require('./toPolar')
exports.toPolar = exports.toAngle
exports.toVector = require('./toVector')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.validate = require('./validate')
