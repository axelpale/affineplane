// affineplane.plane2
//
// A 2D euclidean plane.
//
// A plane is a 2d helmert transform (helm2)
// from the plane coordinates to a reference
// coordinate system called the *reference plane*.
// The transform defines the scale and angle of the plane
// and its origin position on the reference.
//
// The plane is represented with an object `{ a, b, x, y }`
//
// For example `{ a: 1, b: 0, x: 0, y: 0 }` defines a plane
// is an exact copy of its reference plane. For another example
// `{ a: 1, b: 0, x: 20, y: 0 }` defines a plane which
// is located +20 units along x-axis of the reference plane.
//

exports.between = require('./difference')
exports.combine = require('./compose')
exports.compose = exports.combine
exports.create = require('./create')
exports.difference = exports.between
exports.equal = require('./equal')
exports.fromFeatures = require('./fromFeatures')
exports.getScale = require('./getScale')
exports.inverse = require('./invert')
exports.invert = exports.inverse
exports.projectTo = require('./projectTo')
exports.rotateBy = require('./rotateBy')
exports.rotateTo = require('./rotateTo')
exports.rotateToOrtho = require('./rotateToOrtho')
exports.scaleBy = require('./scaleBy')
exports.scaleTo = require('./scaleTo')
exports.transform = require('./transform')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.translateBy = require('./translateBy')
exports.translateTo = require('./translateTo')
exports.validate = require('./validate')

// About projections between planes
//
// Projections between two-dimensional planes for various geometries.
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
