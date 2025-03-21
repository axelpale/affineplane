// @affineplane.sphere2
// @affineplane.circle2
//
// Two dimensional sphere, a circle.
//
// Represented with an object `{ x, y, r }` for the origin and the radius.
//

// @affineplane.sphere2.UNIT
//
// The unit circle, radius=1.
//
exports.UNIT = { x: 0, y: 0, r: 1 }

// @affineplane.sphere2.ZERO
//
// A zero-radius circle.
//
exports.ZERO = { x: 0, y: 0, r: 0 }

exports.almostEqual = require('./almostEqual')
exports.area = require('./area')
exports.atCenter = require('./atCenter')
exports.boundingBox = require('./boundingBox')
exports.boundingCircle = require('./boundingCircle')
exports.collide = require('./collide')
exports.collisionArea = require('./collisionArea')
exports.copy = require('./copy')
exports.create = require('./create')
exports.equal = require('./equal')
exports.fromPoints = require('./fromPoints')
exports.gap = require('./gap')
exports.hasPoint = require('./hasPoint')
exports.homothety = require('./homothety')
exports.offset = require('./offset')
exports.polarOffset = require('./polarOffset')
exports.rotateBy = require('./rotateBy')
exports.scaleBy = exports.homothety
exports.size = require('./size')
exports.tangentCircle = require('./tangentCircle')
exports.tangentCircles = require('./tangentCircles')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.translate = require('./translate')
exports.validate = require('./validate')
