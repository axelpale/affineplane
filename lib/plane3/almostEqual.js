// @affineplane.plane3.almostEqual(pa, pb[, tolerance])
//
// Test if two planes are almost equal.
//
// Parameters:
//   pa
//     a plane3
//   pb
//     a plane3
//   tolerance
//     optional number, default to affineplane.epsilon.
//     .. Set to 0 for strict comparison.
//
// Return:
//   a boolean
//
module.exports = require('../helm3/almostEqual')
