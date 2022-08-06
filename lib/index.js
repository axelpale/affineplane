// affineplane
//
// The affineplane module provides functions for affine 2D geometry.
// The functions are grouped in the following submodules.
//

// TODO exports.box
// A 2D rectangle { xmin, ymin, xmax, ymax }

exports.dir2 = require('./dir2')

exports.dist2 = require('./dist2')

exports.epsilon = require('./epsilon')

// TODO exports.grid

exports.helm2 = require('./helm2')
exports.tran2 = exports.helm2

exports.helm3 = require('./helm3')

exports.linear2 = require('./linear2')

exports.path2 = require('./path2')

exports.poly2 = require('./poly2')

exports.point2 = require('./point2')

exports.point3 = require('./point3')

exports.proj2 = require('./proj2')

exports.proj3 = require('./proj3')

// TODO Rectangle on a two-dimensional plane.
// exports.rect2 = require('./rect2')

exports.size2 = require('./size2')

exports.vec2 = require('./vec2')
exports.vector2 = exports.vec2

exports.vec3 = require('./vec3')
exports.vector3 = exports.vec3

// affineplane.version
//
// Package version string, for example `'1.2.3'`. Uses semantic versioning.
//
exports.version = require('./version')
