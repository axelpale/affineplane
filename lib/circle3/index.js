// @affineplane.circle3
//
// Flat round circle in three dimensional space. Parallel to the xy-plane.
//
// Represented with an object `{ x, y, z, r }` for the origin and the radius.
//

// @affineplane.circle3.UNIT
//
// The unit circle, radius=1.
//
exports.UNIT = { x: 0, y: 0, z: 0, r: 1 }

// @affineplane.circle3.ZERO
//
// A zero-radius circle.
//
exports.ZERO = { x: 0, y: 0, z: 0, r: 0 }

exports.almostEqual = require('./almostEqual')
exports.area = require('./area')
exports.atCenter = require('./atCenter')
exports.boundingBox = require('./boundingBox')
exports.collide = require('./collide')
exports.collideCircle = exports.collide
exports.collideSegment = require('./collideSegment')
exports.copy = require('./copy')
exports.create = require('./create')
exports.hasPoint = require('./hasPoint')
exports.homothety = require('./homothety')
exports.offset = require('./offset')
exports.polarOffset = require('./polarOffset')
exports.projectToPlane = require('./projectToPlane')
exports.projectTo = exports.projectToPlane
exports.rotateBy = require('./rotateBy')
exports.scaleBy = exports.homothety
exports.size = require('./size')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.translate = require('./translate')
exports.validate = require('./validate')
