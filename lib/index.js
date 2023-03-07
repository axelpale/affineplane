// @affineplane
//
// The affineplane module provides functions for affine 2D and 3D geometry.
// The functions are grouped in the following submodules.
//

exports.angle = require('./angle')

exports.basis2 = require('./plane2')
exports.basis3 = require('./plane3')
exports.basis2z = exports.basis3

exports.box2 = require('./box2')
exports.box3 = require('./box3')

// TODO exports.convex2
// TODO exports.convex3

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

exports.orient2 = require('./orient2')
// TODO exports.orient3

exports.quat4 = require('./quat4')

exports.path2 = require('./path2')
exports.path3 = require('./path3')

exports.poly2 = require('./poly2')

exports.plane2 = exports.basis2
exports.plane3 = exports.basis3

exports.point2 = require('./point2')
exports.point3 = require('./point3')

// TODO Ray. A line but into one direction only.
// exports.ray3 = require('./ray3')

exports.rect2 = require('./rect2')
exports.rect3 = require('./rect3')

// TODO rigid2
// TODO rigid3

exports.rot2 = require('./rot2')
// TODO rot3

exports.scalar1 = require('./scalar1')
exports.scalar2 = require('./scalar2')
exports.scalar3 = require('./scalar3')

exports.size2 = require('./size2')
exports.size3 = require('./size3')

exports.sphere2 = require('./sphere2')
exports.sphere3 = require('./sphere3')

exports.vec2 = require('./vec2')
exports.vector2 = exports.vec2

exports.vec3 = require('./vec3')
exports.vector3 = exports.vec3

exports.vec4 = require('./vec4')

// @affineplane.version
//
// Package version string, for example `'1.2.3'`.
// We use [semantic versioning](https://semver.org/).
//
exports.version = require('./version')
