// @affineplane.helm2
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

// Constants
require('./constants')(module.exports)

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
exports.projectToCameraTransform = require('./projectToCameraTransform')
exports.projectToPlane = require('./projectToPlane')
exports.projectTo = exports.projectToPlane

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
