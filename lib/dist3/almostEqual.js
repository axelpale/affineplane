// @affineplane.dist3.almostEqual(c, d[, tolerance])
//
// Test if distances c, d are equal by the margin of tolerance.
//
// Parameters
//   c
//     a number, the dist3
//   d
//     a number, the dist3
//   tolerance
//     optional number, default is affineplane.epsilon.
//     .. Set to 0 for strict comparison.
//
// Return
//   a boolean
//
module.exports = require('../dist2/almostEqual')
