// affineplane.plane3
//
// A plane3 does not model any possible plane in 3D space, but is limited
// to xy planes perpendicular to z-axis and with a known z position.
// Additionally, like plane2, plane3 models uniform scale and angle
// around z-axis.
//
// In other words, a plane is a helmert transform (helm3)
// from the plane coordinates to a reference
// coordinate system. Unlike helm3, the plane3
// has position in the space.
// Therefore it can be projected perspectively.
//
// The plane is represented with an object `{ a, b, x, y, z }`
//
// For example `{ a: 1, b: 0, x: 0, y: 0, z: 0 }` is an exact
// copy of its reference plane. For another example
// `{ a: 1, b: 0, x: 20, y: 0, z: 0 }` is +20 units along x-axis
// relative to its reference plane.
//

// affineplane.plane3.IDENTITY
//
// The identity plane is identical to its reference plane.
//
exports.I = { a: 1, b: 0, x: 0, y: 0, z: 0 }
exports.IDENTITY = exports.I

exports.between = require('./difference')
exports.clone = require('./copy')
exports.compose = require('./compose')
exports.copy = exports.clone
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
