// affineplane.point3.almostEqual(p, q[, epsilon])
//
// Test if points are almost equal by the margin of epsilon.
//
// Parameters
//   p
//     a point3
//   q
//     a point3
//   epsilon
//     optional number, default to affineplane.epsilon.
//     .. Set to 0 for strict comparison.
//
// Return
//   a boolean
//
module.exports = require('../vec3/almostEqual')
