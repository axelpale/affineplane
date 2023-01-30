// @affineplane.helm3
//
// Functions for a special 3D affine transformation that consists of
// a translation in 3D, rotation around z-axis, and uniform scaling,
// alias dilation.
// In other words, the transformation is a 3D Helmert transformation
// with a limited ability to rotate only about z-axis.
//
// A helm3 is an object `{ a, b, x, y, z }`
//
// Like vec3 and unlike point3, helm3 represents movement.
// Therefore it has no single position in space,
// and is not affected by plane translations.
// See affineplane.plane3 for a positional variant.
//

// @affineplane.helm3.I
// @affineplane.helm3.IDENTITY
//
// Identity transform, a kind of multiplication by 1.
//
exports.I = {
  a: 1,
  b: 0,
  x: 0,
  y: 0,
  z: 0
}
exports.IDENTITY = exports.I

// @affineplane.helm3.UNIT
//
// A unit transform. Scales by sqrt(2), rotates by 45deg,
// and translates by vector (1,1,1)
//
exports.UNIT = {
  a: 1,
  b: 1,
  x: 1,
  y: 1,
  z: 1
}

// @affineplane.helm3.SINGULAR
// @affineplane.helm3.ZERO
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
  y: 0,
  z: 0
}
exports.ZERO = exports.SINGULAR

// @affineplane.helm3.ROT0
// Zero angle rotation.
exports.ROT0 = exports.IDENTITY

// @affineplane.helm3.ROT45
// Clockwise rotation of 45 degrees.
exports.ROT45 = { a: 1 / Math.sqrt(2), b: 1 / Math.sqrt(2), x: 0, y: 0, z: 0 }

// @affineplane.helm3.ROT90
// Clockwise rotation of 90 degrees.
exports.ROT90 = { a: 0, b: 1, x: 0, y: 0, z: 0 }

// @affineplane.helm3.ROT180
// Rotation of 180 degrees.
exports.ROT180 = { a: -1, b: 0, x: 0, y: 0, z: 0 }

// @affineplane.helm3.ROT270
// Clockwise rotation of 270 degrees.
exports.ROT270 = { a: 0, b: -1, x: 0, y: 0, z: 0 }

// @affineplane.helm3.HALF
// Scaling to half size.
exports.HALF = { a: 0.5, b: 0, x: 0, y: 0, z: 0 }

// @affineplane.helm3.X2
// Scaling to double size.
exports.X2 = { a: 2, b: 0, x: 0, y: 0, z: 0 }

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
exports.equal = require('./equal')
exports.fromArray = require('./fromArray')
exports.fromBasisVector = require('./fromBasisVector')
exports.fromFeatures = require('./fromFeatures')
exports.fromPlane = require('./fromPlane')
exports.fromVector = require('./fromVector')
exports.getDilation = require('./getDilation')
exports.getRotation = require('./getRotation')
exports.getScale = exports.getDilation
exports.getTranslation = require('./getTranslation')
exports.inverse = require('./invert')
exports.invert = exports.inverse
exports.limitDilation = require('./limitDilation')
exports.projectTo = require('./projectTo')
exports.projectToPlane = exports.projectTo
exports.rotateBy = require('./rotateBy')
exports.scaleBy = require('./scaleBy')
exports.setDilation = require('./setDilation')
exports.setRotation = require('./setRotation')
exports.setTranslation = require('./setTranslation')
exports.toArray = require('./toArray')
exports.toMatrix = require('./toMatrix')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.translateBy = exports.addTranslation
exports.validate = require('./validate')
