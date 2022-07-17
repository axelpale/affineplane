
// TODO exports.box
// A 2D rectangle { xmin, ymin, xmax, ymax }

exports.dir2 = require('./dir2')

exports.dist2 = require('./dist2')

exports.epsilon = require('./epsilon')

// TODO exports.grid

exports.linear2 = require('./linear2')

exports.path2 = require('./path2')

exports.poly2 = require('./poly2')

exports.point2 = require('./point2')

exports.point3 = require('./point3')

// TODO Three-dimensional point with rotation around z-axis.
// exports.point3r = require('./point3r')

exports.proj2 = require('./proj2')

// Perspective projection between parallel two-dimensional planes.
exports.proj3 = require('./proj3')

/// TODO Rectangle on a two-dimensional plane.
/// exports.rect2 = require('./rect2')

exports.size2 = require('./size2')

// Various functions for two-dimensional affine non-reflective similarity
// transformation. Such transformations allow translation, uniform scaling, and
// rotation. The functions expect the transformation as an object
// `{ a, b, x, y }`
exports.tran2 = require('./tran2')
exports.helm2 = exports.tran2

// Two-dimensional vector.
exports.vector2 = require('./vector2')

// Three-dimensional vector.
exports.vector3 = require('./vector3')

// TODO Three-dimensional vector with rotation around z-axis.
// exports.vector3r = require('./vector3r')

// affineplane.version
//
// Package version string, for example '1.2.3'. Uses semantic versioning.
//
exports.version = require('./version')
