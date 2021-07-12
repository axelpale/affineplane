// transform
// Functions for transformation matrices, and to be exact,
// affine non-reflective similarity transformation matrices.
//

// ### Constants ###

// Identity transform, a kind of multiplication by 1.
exports.I =
exports.IDENTITY = {
  a: 1,
  b: 0,
  x: 0,
  y: 0
}

// Useful transformations
const isqrt2 = 1 / Math.sqrt(2)
exports.ROT45 = { a: isqrt2, b: isqrt2, x: 0, y: 0 }
exports.ROT90 = { a: 0, b: 1, x: 0, y: 0 }
exports.ROT180 = { a: -1, b: 0, x: 0, y: 0 }
exports.ROT270 = { a: 0, b: -1, x: 0, y: 0 }
exports.HALF = { a: 0.5, b: 0, x: 0, y: 0 }
exports.X2 = { a: 2, b: 0, x: 0, y: 0 }

// ### Functions ###

exports.almostEqual =
exports.almostEquals = require('./almostEqual')

exports.compose = require('./compose')

exports.copy = require('./copy')

exports.create = require('./create')

exports.fromPolar = require('./fromPolar')

exports.fromArray = require('./fromArray')

exports.equal =
exports.equals = require('./equal')

exports.getRotation = require('./getRotation')

exports.getScale = require('./getScale')

exports.getTranslation = require('./getTranslation')

exports.toArray = require('./toArray')

exports.toMatrix = require('./toMatrix')

exports.toString = require('./toString')

// point
// transform
// transformPoint
// projectPoint
exports.mapPoint = require('./mapPoint')

exports.mapPoints = require('./mapPoints')

exports.mapVector = require('./mapVector')

exports.compose =
exports.multiply = require('./multiply')

exports.inverse = require('./inverse')

exports.scaleBy = require('./scaleBy')
exports.scaleTo = require('./scaleTo')

exports.rotateBy = require('./rotateBy')
exports.rotateTo = require('./rotateTo')

exports.transform = require('./transform')

// exports.addVector = ?
// exports.translate =
exports.translateBy = require('./translateBy')
exports.translateTo = require('./translateTo')

exports.validate = require('./validate')
