// affineplane
//
// The affineplane module provides functions for affine 2D geometry.
// The functions are grouped in the following submodules.
//

// TODO exports.box
// A 2D rectangle { xmin, ymin, xmax, ymax }

exports.angle = require('./angle')

exports.dir2 = require('./dir2')
exports.dir3 = require('./dir3')

exports.dist2 = require('./dist2')
exports.dist3 = require('./dist3')

exports.epsilon = require('./epsilon')

// TODO exports.grid

exports.helm2 = require('./helm2')
exports.tran2 = exports.helm2 // TODO drop alias in v3

exports.helm2z = require('./helm3')
exports.helm3 = exports.helm2z // TODO separate helm2z and helm3 in v3

exports.line2 = require('./line2')
exports.line3 = require('./line3')

// TODO orient2
// TODO orient3

exports.quat4 = require('./quat4')

exports.path2 = require('./path2')
exports.path3 = require('./path3')

exports.poly2 = require('./poly2')

exports.plane2 = require('./plane2')
exports.plane3 = require('./plane3')

exports.point2 = require('./point2')
exports.point3 = require('./point3')

// TODO Ray. A line but into one direction only.
// exports.ray3 = require('./ray3')

exports.rect2 = require('./rect2')

// TODO rigid2
// TODO rigid3

// TODO rot2
// TODO rot3

exports.size2 = require('./size2')

exports.vec2 = require('./vec2')
exports.vector2 = exports.vec2

exports.vec3 = require('./vec3')
exports.vector3 = exports.vec3

exports.vec4 = require('./vec4')

// affineplane.version
//
// Package version string, for example `'1.2.3'`. Uses semantic versioning.
//
exports.version = require('./version')
