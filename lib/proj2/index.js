// The proj2 projections are orthogonal projections from plane A to plane B,
// assuming that the planes are parallel in 3D.
//
// A projection can be used as a function that converts
// coordinates of geometric structures from plane to plane.
//
// The structure of projected objects stays completely intact.
// Only the representation changes. Therefore projections are isomorphisms.
//
// The structures are in affine space: there is no origin or 'global' plane.
//
// The projection defines the location of plane A on plane B.
// The projection defines the orientation of plane A on plane B.
// A projection maps the position (0,0) on plane A to the same
// position on plane B, represented in the basis of B.
//
// If plane A is a child element and plane B the parent, then
// the projection from A to B is equivalent to the location of A on B.
//

// Projection from a plane to itself.
exports.I = { a: 1, b: 0, x: 0, y: 0 }
exports.IDENTITY = exports.I

exports.copy = require('./copy')
exports.create = require('./create')

// exports.add =
// exports.apply =
// exports.multiply =
exports.compose = require('./compose')
exports.combine = exports.compose

exports.inverse = require('./inverse')
exports.invert = exports.inverse

// exports.difference =
// exports.fromto =
// exports.projectionBetween =
// exports.relative =
exports.between = require('./between')
exports.delta = exports.between

exports.dir2 = require('./dir2')
exports.direction = exports.dir2

exports.dist2 = require('./dist2')
exports.distance = exports.dist2

exports.point2 = require('./point2')
exports.point = exports.point2

// exports.projectTranslation =
// exports.projectVector =
exports.vector2 = require('./vector2')

// exports.lin2 =
// exports.linear =
exports.linear2 = require('./linear2')

/// exports.size
exports.size2 = require('./size2')

// exports.projectProj =
// exports.projectTransform =
// exports.tran =
exports.tran2 = require('./tran2')
