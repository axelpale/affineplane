
// TODO exports.box
// A 2D rectangle { xmin, ymin, xmax, ymax }

exports.dir2 = require('./dir2')

exports.dist2 = require('./dist2')

exports.epsilon = require('./epsilon')

// TODO exports.grid

// Two-dimensional linear similarity transformation. In other words,
// it describes a rotation and uniform scaling around (0,0).
//
// Linear transformations cannot be used on point2
// because the points in affine space
// do not have origin. With an origin it is possible.
// Therefore vector2 can be linearly transformed.
//
exports.linear2 = require('./linear2')

// Two-dimensional path; Array of point2; Open sequence of points;
// Does not form a polygon but a sequence of line segments.
// `[{ x, y }, { x, y }, ...]`
//
exports.path2 = require('./path2')

// A two-dimensional polygon; Array of point2;
// A closed sequence of points `[{ x, y }, { x, y }, ...]`
exports.poly2 = require('./poly2')

// A two-dimensional point. Due to affinity, two points cannot be added
// together, although the distance between and their mean can be computed.
exports.point2 = require('./point2')

// Three-dimensional point.
exports.point3 = require('./point3')

/// TODO Three-dimensional point with rotation around z-axis.
/// exports.point3r = require('./point3r')

// Projections between two-dimensional planes for various geometries.
exports.proj2 = require('./proj2')

// Perspective projection between parallel two-dimensional planes.
exports.proj3 = require('./proj3')

/// TODO Rectangle on a two-dimensional plane.
/// exports.rect2 = require('./rect2')

// Rectangular size, consisting of width and height.
exports.size2 = require('./size2')

// Various functions for two-dimensional affine non-reflective similarity
// transformation. Such transformations allow translation, uniform scaling, and
// rotation. The functions expect the transformation as an object
// `{ a, b, x, y }`
exports.tran2 = require('./tran2')

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
