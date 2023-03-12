// @affineplane.sphere3
//
// Three dimensional sphere.
//
// Represented with an object `{ x, y, z, r }` for the origin and the radius.
//
exports.almostEqual = require('./almostEqual')
exports.area = require('./area')
exports.atCenter = require('./atCenter')
exports.boundingBox = require('./boundingBox')
exports.collide = require('./collide')
exports.copy = require('./copy')
exports.create = require('./create')
exports.gap = require('./gap')
exports.hasPoint = require('./hasPoint')
exports.homothety = require('./homothety')
exports.offset = require('./offset')
exports.projectToPlane = require('./projectToPlane')
exports.projectTo = exports.projectToPlane
exports.rotateAroundLine = require('./rotateAroundLine')
exports.rotateBy = require('./rotateBy')
exports.scaleBy = exports.homothety
exports.size = require('./size')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.translate = require('./translate')
exports.validate = require('./validate')
exports.volume = require('./volume')
