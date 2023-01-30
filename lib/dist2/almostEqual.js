const EPSILON = require('../epsilon')

module.exports = (c, d, tolerance) => {
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
  if (typeof tolerance !== 'number') {
    tolerance = EPSILON
  }

  const delta = Math.abs(c - d)

  // Use "<=" instead of "<" to make tolerance=0 work.
  return delta <= tolerance
}
