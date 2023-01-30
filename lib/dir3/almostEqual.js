// @affineplane.dir3.almostEqual(d, dd[, epsilon])
//
// Test if directions are almost equal by the margin of epsilon.
// The directions are compared as two unit vectors.
//
// Parameters
//   d
//     a dir3
//   dd
//     a dir3
//   epsilon
//     Optional number, default to affineplane.epsilon.
//     Set to 0 for strict comparison.
//
// Return
//   a boolean
//
module.exports = require('../vec3/almostEqual')
