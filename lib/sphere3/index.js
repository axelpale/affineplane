// @affineplane.sphere3
//
// Three dimensional sphere.
//
// Represented with an object `{ x, y, z, r }` for the origin and the radius.
//
exports.almostEqual = require('./almostEqual')
exports.area = require('./area')
exports.collide = require('./collide')
exports.copy = require('./copy')
exports.create = require('./create')
exports.gap = require('./gap')
exports.hasPoint = require('./hasPoint')
exports.homothety = require('./homothety')
exports.offset = require('./offset')
exports.scaleBy = exports.homothety
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.validate = require('./validate')
