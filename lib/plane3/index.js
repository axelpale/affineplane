// affineplane.plane3
//
// A plane3 does not model any possible plane in 3D space, but is limited
// to xy planes perpendicular to z axis and with a known z position.
// Additionally, like plane2, plane3 models uniform scaling and rotation
// about z axis.
//
// In other words, a plane is a helmert transform (helm3)
// from the plane coordinates to a target
// coordinate system. Unlike helm3, the plane3
// has position in the space.
// Therefore it can be projected perspectively.
//
// The plane is represented with an object `{ a, b, x, y, z }`
//
// This plane is an exact copy of its reference plane:
//
//     { a: 1, b: 0, x: 0, y: 0, z: 0 }
//
// This plane is +20 units along x axis relative to its reference plane.
//
//     { a: 1, b: 0, x: 20, y: 0, z: 0 }
//

exports.create = require('./create')
exports.equal = require('./equal')
exports.projectToPlane = require('./projectToPlane')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.validate = require('./validate')
