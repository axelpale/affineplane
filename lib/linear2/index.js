// affineplane.linear2
//
// Two-dimensional linear similarity transformation. In other words,
// it describes a rotation and uniform scaling around (0,0).
//
// Linear transformations cannot be used on point2
// because the points in affine space
// do not have origin. With an origin it is possible.
// Therefore vector2 can be linearly transformed.
//

exports.compose = require('./compose')
exports.multiply = exports.compose
exports.combine = exports.compose

exports.copy = require('./copy')
exports.create = require('./create')
exports.polar = require('./polar')
