// @affineplane.circle3.almostEqual(c, d[, tolerance])
//
// Test if two circles are almost equal by the margin of tolerance.
//
// Parameters
//   c
//     a circle3
//   d
//     a circle3
//   tolerance
//     optional number, default to affineplane.epsilon.
//     .. Set to 0 for strict comparison.
//
// Return
//   a boolean
//
module.exports = require('../sphere3/almostEqual')
