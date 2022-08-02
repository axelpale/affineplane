// affineplane.helm3
//
// Functions for a special 3D affine transformation that consists of
// uniform scaling and rotation on the xy plane and a translation in 3D.
// In other words, the transformation is a 2D Helmert transformation
// with additional ability to translate along z-axis, hence the name.
//
// A helm3 is an object `{ a, b, x, y, z }`
//

exports.almostEqual = require('./almostEqual')
exports.almostEquals = exports.almostEqual
exports.compose = require('./compose')
exports.combine = exports.compose
exports.copy = require('./copy')
exports.clone = exports.copy
exports.create = require('./create')
exports.equal = require('./equal')
exports.toMatrix = require('./toMatrix')
exports.validate = require('./validate')