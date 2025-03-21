// @affineplane.box3
//
// Three-dimensional cuboid that has the front face parallel with xy-plane.
// Unlike size3, box3 has location and orientation and
// thus can be represented in any basis without loss of information.
//
// Represented with an object `{ a, b, x, y, z, w, h, d }` where
// - `a,b` provide orientation on xy-plane with respect to the reference basis.
// - `x,y,z` provide origin position in the reference basis.
// - `w,h,d` provide box size on the reference basis.
//

// @affineplane.box3.UNIT
//
// An origin-centered box with unit width, height, and depth.
//
exports.UNIT = { a: 1, b: 0, x: -0.5, y: -0.5, z: -0.5, w: 1, h: 1, d: 1 }

// @affineplane.box3.ZERO
//
// A zero-size box.
//
exports.ZERO = { a: 1, b: 0, x: 0, y: 0, z: 0, w: 0, h: 0, d: 0 }

exports.almostEqual = require('./almostEqual')
exports.at = require('./at')
exports.atBox = require('./atBox')
exports.atNorm = require('./atNorm')
exports.collide = require('./collide')
exports.create = require('./create')
exports.equal = require('./equal')
exports.fromPoints = require('./fromPoints')
exports.getAngle = require('./getAngle')
exports.getBasis = require('./getBasis')
exports.getBasisInverse = require('./getBasisInverse')
exports.getBounds = require('./getBounds')
exports.getMinimumBounds = require('./getMinimumBounds')
exports.getSize = require('./getSize')
exports.getSphere = require('./getSphere')
exports.getVolume = require('./getVolume')
exports.hasPoint = require('./hasPoint')
exports.homothety = require('./homothety')
exports.offset = require('./offset')
exports.projectToPlane = require('./projectToPlane')
exports.projectTo = exports.projectToPlane
exports.resizeBy = require('./resizeBy')
exports.resizeTo = require('./resizeTo')
exports.rotateBy = require('./rotateBy')
exports.scaleBy = exports.homothety
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.translate = require('./translate')
exports.translateBy = exports.offset
exports.validate = require('./validate')
