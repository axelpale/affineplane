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
exports.projectToPlane = require('./projectToPlane')
exports.projectTo = exports.projectToPlane
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
