// affineplane.plane2
//
// A 2D euclidean plane.
//
// A plane is a 2d helmert transform (helm2)
// from the plane coordinates to a target
// coordinate system.
// The transform defines the scale and rotation of the plane
// and its origin position on the target.
//
// The plane is represented with an object `{ a, b, x, y }`
//
// This plane is an exact copy of its root:
//
//     { a: 1, b: 0, x: 0, y: 0 }
//
// This plane is +20 units along x axis.
//
//     { a: 1, b: 0, x: 20, y: 0 }
//

exports.create = require('./create')
exports.equal = require('./equal')
exports.inverse = require('./invert')
exports.invert = exports.inverse
exports.projectToPlane = require('./projectToPlane')
exports.rotateBy = require('./rotateBy')
exports.rotateTo = require('./rotateTo')
exports.rotateToOrtho = require('./rotateToOrtho')
exports.scaleBy = require('./scaleBy')
exports.scaleTo = require('./scaleTo')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.translateBy = require('./translateBy')
exports.translateTo = require('./translateTo')
exports.validate = require('./validate')
