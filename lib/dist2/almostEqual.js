// @affineplane.dist2.almostEqual(c, d[, tolerance])
//
// Test if distances c, d are almost equal by the margin of tolerance.
//
// Parameters
//   c
//     a number, the dist2
//   d
//     a number, the dist2
//   tolerance
//     optional number, default is affineplane.epsilon.
//     .. Set to 0 for strict comparison.
//
// Return
//   a boolean
//
module.exports = require('../scalar1/almostEqual')
