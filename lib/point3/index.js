// @affineplane.point3
//
// Three-dimensional point { x, y, z }. Unlike vectors, points model
// locations in space and therefore are affected by scale, orientation, and
// translation of the plane on which they are represented.
//

// @affineplane.point3.ZERO
//
// The zero point
//
exports.ZERO = { x: 0, y: 0, z: 0 }

exports.almostEqual = require('./almostEqual')
exports.average = require('./average')
exports.copy = require('./copy')
exports.clone = exports.copy
exports.create = require('./create')
exports.delta = require('./difference')
exports.diff = exports.delta
exports.difference = exports.delta
exports.direction = require('./direction')
exports.distance = require('./distance')
exports.distanceToLine = require('./distanceToLine')
exports.distanceToPlane = require('./distanceToPlane')
exports.distanceToRay = require('./distanceToRay')
exports.equal = require('./equal')
exports.equals = exports.equal
exports.fromArray = require('./fromArray')
exports.homothety = require('./homothety')
exports.mean = exports.average
exports.offset = require('./offset')
exports.polarOffset = require('./polarOffset')
exports.projectByDistance = require('./projectByDistance')
exports.projectToPlane = require('./projectToPlane')
exports.projectTo = exports.projectToPlane
exports.rotateAroundLine = require('./rotateAroundLine')
exports.rotateBy = require('./rotateBy')
exports.round = require('./round')
exports.toArray = require('./toArray')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.translate = require('./translate')
exports.translateBy = exports.translate
exports.validate = require('./validate')
exports.vectorTo = exports.delta
