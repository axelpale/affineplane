// @affineplane.scalar3.almostEqual(c, d[, tolerance])
//
// Test if the third-order scalars c, d are almost equal within
// the margin of tolerance.
//
// Parameters
//   c
//     a number, a scalar3
//   d
//     a number, a scalar3
//   tolerance
//     optional number, default is affineplane.epsilon.
//     .. Set to 0 for strict comparison.
//
// Return
//   a boolean
//
module.exports = require('../scalar1/almostEqual')
