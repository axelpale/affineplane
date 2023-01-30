// @affineplane.plane2
//
// A 2D euclidean plane.
//
// A plane is a 2D Helmert transformation
// from the plane coordinates to a reference
// coordinate system called the *reference plane*.
// The transform defines the scale and angle of the plane
// and its origin position on the reference.
//
// The plane is represented with an object `{ a, b, x, y }`.
// See the illustration below for visual explanation of these properties.
//
// For example `{ a: 1, b: 0, x: 0, y: 0 }` defines a plane
// is an exact copy of its reference plane. For another example
// `{ a: 1, b: 0, x: 20, y: 0 }` defines a plane which
// is located +20 units along x-axis of the reference plane.
//
// ![Basis and its properties](geometry_basis_2d.png)
//

// @affineplane.plane2.IDENTITY
//
// The identity plane is identical to its reference plane.
//
exports.I = { a: 1, b: 0, x: 0, y: 0 }
exports.IDENTITY = exports.I

exports.almostEqual = require('./almostEqual')
exports.between = require('./difference')
exports.clone = require('./copy')
exports.combine = require('./compose')
exports.compose = exports.combine
exports.copy = exports.clone
exports.create = require('./create')
exports.difference = exports.between
exports.equal = require('./equal')
exports.fromFeatures = require('./fromFeatures')
exports.fromHelmert = require('./fromHelmert')
exports.getScale = require('./getScale')
exports.inverse = require('./invert')
exports.invert = exports.inverse
exports.limitScale = require('./limitScale')
exports.projectTo = require('./projectTo')
exports.projectToPlane = exports.projectTo
exports.rotateBy = require('./rotateBy')
exports.rotateTo = require('./rotateTo')
exports.rotateToOrtho = require('./rotateToOrtho')
exports.scaleBy = require('./scaleBy')
exports.scaleTo = require('./scaleTo')
exports.transform = require('./transform')
exports.transformInside = require('./transformInside')
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
