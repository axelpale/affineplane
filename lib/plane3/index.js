// affineplane.plane3
//
// A plane is a helmert transform (helm3)
// from the plane coordinates to a target
// coordinate system.
//
// The plane is represented with an object `{ a, b, x, y, z }`
//
// This plane is an exact copy of its root:
//
//     { a: 1, b: 0, x: 0, y: 0, z: 0 }
//
// This plane is +20 units along x axis.
//
//     { a: 1, b: 0, x: 20, y: 0, z: 0 }
//
module.exports = require('../helm3')
