// affineplane.helm2
// affineplane.tran2
//
// Provides functions for a special kind of 2D transformation matrices,
// *two-dimensional Helmert transformations*.
// These matrices represent translation, rotation, and uniform scale.
// They are also known as *affine non-reflective similarity transformations*.
//
// The functions expect the transformation as an object with properties
// `{ a, b, x, y }`
//

// affineplane.helm2.I
// affineplane.helm2.IDENTITY
// Identity transform, a kind of multiplication by 1.
exports.I = {
  a: 1,
  b: 0,
  x: 0,
  y: 0
}
exports.IDENTITY = exports.I

// affineplane.helm2.SINGULAR
// Singular transform, resembles multiplication by 0.
// Note that singular transformations are note valid affine transformations
// because singularity cannot be inverted.
// For example with numbers, you can multiply 2 by 0 to produce 0 but
// you cannot multiply 0 to produce the original 2.
exports.SINGULAR = {
  a: 0,
  b: 0,
  x: 0,
  y: 0
}

// affineplane.helm2.ROT0
// Zero angle rotation.
exports.ROT0 = exports.IDENTITY

// affineplane.helm2.ROT45
// Clockwise rotation of 45 degrees.
exports.ROT45 = { a: 1 / Math.sqrt(2), b: 1 / Math.sqrt(2), x: 0, y: 0 }

// affineplane.helm2.ROT90
// Clockwise rotation of 90 degrees.
exports.ROT90 = { a: 0, b: 1, x: 0, y: 0 }

// affineplane.helm2.ROT180
// Rotation of 180 degrees.
exports.ROT180 = { a: -1, b: 0, x: 0, y: 0 }

// affineplane.helm2.ROT270
// Clockwise rotation of 270 degrees.
exports.ROT270 = { a: 0, b: -1, x: 0, y: 0 }

// affineplane.helm2.HALF
// Scaling to half size.
exports.HALF = { a: 0.5, b: 0, x: 0, y: 0 }

// affineplane.helm2.X2
// Scaling to double size.
exports.X2 = { a: 2, b: 0, x: 0, y: 0 }

exports.almostEqual = require('./almostEqual')
exports.almostEquals = exports.almostEqual

exports.changeBasis = require('./changeBasis')

exports.compose = require('./compose')
exports.combine = exports.compose

exports.copy = require('./copy')
exports.clone = exports.copy

exports.create = require('./create')

exports.det = require('./det')
exports.determinant = exports.det

exports.solveLeft = require('./solveLeft')
exports.solveRight = require('./solveRight')

exports.equal = require('./equal')
exports.equals = exports.equal

exports.fromArray = require('./fromArray')

exports.fromPolar = require('./fromPolar')

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
exports.rotateToOrtho = require('./rotateToOrtho')

exports.toArray = require('./toArray')

exports.toMatrix = require('./toMatrix')

exports.toString = require('./toString')

exports.transform = require('./transform')

exports.transit = exports.changeBasis

/// exports.addVector = ?
/// exports.translate =
exports.translateBy = require('./translateBy')
exports.translateTo = require('./translateTo')

exports.validate = require('./validate')
