// affineplane.helm2
//
// Provides functions for a special kind of 2D transformation matrices,
// *two-dimensional Helmert transformations*.
// These matrices represent translation, rotation, and uniform dilation.
// They are also known as *affine non-reflective similarity transformations*.
//
// The functions expect the transformation as an object with properties
// `{ a, b, x, y }`
//
// Like vec2 and unlike point2, helm2 represents movement.
// Therefore it has no single position in space,
// and is not affected by plane translations.
// See affineplane.plane2 for a positional variant.
//

// affineplane.helm2.I
// affineplane.helm2.IDENTITY
//
// Identity transform, a kind of multiplication by 1.
//
exports.I = {
  a: 1,
  b: 0,
  x: 0,
  y: 0
}
exports.IDENTITY = exports.I

// affineplane.helm2.UNIT
//
// A unit transform. Scales by sqrt(2), rotates by 45deg,
// and translates by vector (1,1)
//
exports.UNIT = {
  a: 1,
  b: 1,
  x: 1,
  y: 1
}

// affineplane.helm2.SINGULAR
//
// Singular transform, resembles multiplication by 0.
// Note that singular transformations are note valid affine transformations
// because singularity cannot be inverted.
// For example with numbers, you can multiply 2 by 0 to produce 0 but
// you cannot multiply 0 to produce the original 2.
//
exports.SINGULAR = {
  a: 0,
  b: 0,
  x: 0,
  y: 0
}
exports.ZERO = exports.SINGULAR

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

// Functions

exports.addDilation = require('./addDilation')
exports.addRotation = require('./addRotation')
exports.addTranslation = require('./addTranslation')

exports.almostEqual = require('./almostEqual')
exports.almostEquals = exports.almostEqual

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
exports.fromBasisVector = require('./fromBasisVector')
exports.fromFeatures = require('./fromFeatures')
exports.fromPlane = require('./fromPlane')
exports.fromPolar = require('./fromPolar')
exports.fromVector = require('./fromVector')

exports.getDilation = require('./getDilation')
exports.getRotation = require('./getRotation')
exports.getScale = exports.getDilation
exports.getTranslation = require('./getTranslation')

exports.multiply = exports.compose

exports.inverse = require('./invert')
exports.invert = exports.inverse
exports.limitDilation = require('./limitDilation')
exports.projectTo = require('./projectTo')
exports.projectToPlane = exports.projectTo

exports.scaleBy = require('./scaleBy')

// exports.scaleTo
// helm2 does not have absolute scale and thus
// cannot be dilated to certain scale.

exports.setDilation = require('./setDilation')
exports.setRotation = require('./setRotation')
exports.setTranslation = require('./setTranslation')

exports.snapRotation = require('./snapRotation')

exports.rotateBy = require('./rotateBy')

// exports.rotateTo
// helm2 does not have absolute direction and thus
// cannot be rotated to certain direction

exports.toArray = require('./toArray')

exports.toMatrix = require('./toMatrix')

exports.toString = require('./toString')

exports.transform = require('./transform')

exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')

exports.validate = require('./validate')
