// @affineplane.dir2
//
// A direction on 2D space.
//
// A direction is basically a unit vector.
// When a direction is transited between planes, only the rotation of
// the coordinate space affects the direction.
//
exports.almostEqual = require('./almostEqual')
exports.create = require('./fromPolar')
exports.fromAngle = exports.create
exports.fromPolar = exports.create
exports.fromVector = require('./fromVector')
exports.projectTo = require('./projectTo')
exports.projectToPlane = exports.projectTo
exports.toAngle = require('./toPolar')
exports.toPolar = exports.toAngle
exports.toVector = require('./toVector')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
