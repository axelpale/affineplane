// @affineplane.dist3.transitTo(dist, target)
//
// Transit a dist3 to a target basis.
// In other words, represent the distance
// in the coordinate system of the basis.
//
// Parameters:
//   dist
//     a dist3 in the reference basis.
//   target
//     a plane3, the target basis, represented
//     .. in the reference basis.
//
// Return:
//   a dist3 in the target basis.
//
module.exports = require('../scalar1/transitTo')
