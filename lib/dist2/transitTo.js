// @affineplane.dist2.transitTo(dist, target)
//
// Transit a dist2 to another basis.
// In other words, represent the distance
// in the coordinate system of the target.
//
// Parameters:
//   dist
//     a number, a dist2 in the reference basis.
//   target
//     a plane2, the target basis, represented
//     .. in the reference basis.
//
// Return:
//   a number, a dist2 in the target basis.
//
module.exports = require('../scalar1/transitTo')
