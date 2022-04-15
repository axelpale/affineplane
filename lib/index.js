
/// TODO exports.box
/// A 2D rectangle { xmin, ymin, xmax, ymax }

// The distance measure is a directionless, always positive measure.
// If projected between planes, only a change in the coordinate scale
// affects the distance.
exports.dist2 = require('./dist2')

// Default margin for non-strict numeric equality.
exports.epsilon = require('./epsilon')

/// TODO exports.grid

// Two-dimensional linear similarity transformation. In other words,
// it describes a rotation and uniform scaling around (0,0).
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

// Three-dimensional point with rotation around z-axis.
exports.point3r = require('./point3r')

// Projections between two-dimensional planes for various geometries.
exports.proj2 = require('./proj2')

// Perspective projection between parallel two-dimensional planes.
exports.proj3 = require('./proj3')

// Rectangle on a two-dimensional plane.
exports.rect2 = require('./rect2')

// Rectangular size, consisting of width and height.
exports.size2 = require('./size2')

// Two-dimensional non-reflective similarity transformation.
exports.tran2 = require('./tran2')

// Two-dimensional vector.
exports.vector2 = require('./vector2')

// Three-dimensional vector.
exports.vector3 = require('./vector3')

// Three-dimensional vector with rotation around z-axis.
exports.vector3r = require('./vector3r')

// Package version string. Uses semantic versioning.
exports.version = require('./version')
