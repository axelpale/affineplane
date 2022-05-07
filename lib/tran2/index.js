// Provides functions for 2D transformation matrices, and to be exact,
// affine non-reflective similarity transformation matrices.
//

// Identity transform, a kind of multiplication by 1.
exports.I = {
  a: 1,
  b: 0,
  x: 0,
  y: 0
}
exports.IDENTITY = exports.I

// Clockwise rotation of 45 degrees.
const isqrt2 = 1 / Math.sqrt(2)
exports.ROT45 = { a: isqrt2, b: isqrt2, x: 0, y: 0 }

// Clockwise rotation of 90 degrees.
exports.ROT90 = { a: 0, b: 1, x: 0, y: 0 }

// Rotation of 180 degrees.
exports.ROT180 = { a: -1, b: 0, x: 0, y: 0 }

// Clockwise rotation of 270 degrees.
exports.ROT270 = { a: 0, b: -1, x: 0, y: 0 }

// Scaling to half size.
exports.HALF = { a: 0.5, b: 0, x: 0, y: 0 }

// Scaling to double size.
exports.X2 = { a: 2, b: 0, x: 0, y: 0 }

exports.almostEqual = require('./almostEqual')
exports.almostEquals = exports.almostEqual

exports.changeBasis = require('./changeBasis')

exports.compose = require('./compose')
exports.combine = exports.compose

exports.copy = require('./copy')

exports.create = require('./create')

exports.det = require('./det')

exports.solveLeft = require('./solveLeft')
exports.solveRight = require('./solveRight')

exports.equal = require('./equal')
exports.equals = exports.equal

exports.fromArray = require('./fromArray')

exports.fromPolar = require('./fromPolar')

/// exports.fromVector3r = require('./fromVector3r')

exports.getRotation = require('./getRotation')

exports.getScale = require('./getScale')

exports.getTranslation = require('./getTranslation')

exports.multiply = exports.compose

exports.inverse = require('./inverse')
exports.invert = exports.inverse

exports.scaleBy = require('./scaleBy')
exports.scaleTo = require('./scaleTo')

exports.rebase = exports.changeBasis

exports.rotateBy = require('./rotateBy')
exports.rotateTo = require('./rotateTo')

exports.toArray = require('./toArray')

exports.toMatrix = require('./toMatrix')

exports.toString = require('./toString')

/// exports.toVector3r = require('./toVector3r')

exports.transform = require('./transform')

exports.transit = exports.changeBasis

// exports.addVector = ?
// exports.translate =
exports.translateBy = require('./translateBy')
exports.translateTo = require('./translateTo')

exports.validate = require('./validate')
