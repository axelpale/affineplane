// @affineplane.sphere2
// @affineplane.circle2
//
// Two dimensional sphere, a circle.
//
// Represented with an object `{ x, y, r }` for the origin and the radius.
//
exports.UNIT = { x: 0, y: 0, r: 1 }
exports.ZERO = { x: 0, y: 0, r: 0 }

exports.almostEqual = require('./almostEqual')
exports.area = require('./area')
exports.atCenter = require('./atCenter')
exports.boundingBox = require('./boundingBox')
exports.boundingCircle = require('./boundingCircle')
exports.collide = require('./collide')
exports.copy = require('./copy')
exports.create = require('./create')
exports.gap = require('./gap')
exports.hasPoint = require('./hasPoint')
exports.homothety = require('./homothety')
exports.offset = require('./offset')
exports.polarOffset = require('./polarOffset')
exports.rotateBy = require('./rotateBy')
exports.scaleBy = exports.homothety
exports.size = require('./size')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.translate = require('./translate')
exports.validate = require('./validate')
