const EPSILON = require('../epsilon')

module.exports = function (s, ss, tolerance) {
  // @affineplane.size2.almostEqual(s, ss[, tolerance])
  //
  // Test if two sizes are equal within tolerance.
  //
  // Parameters:
  //   s
  //     a size2
  //   ss
  //     a size2
  //   tolerance
  //     optional number, default is affineplane.epsilon.
  //     .. Set to 0 for strict comparison.
  //
  // Return:
  //   a boolean
  //

  if (typeof tolerance !== 'number') {
    tolerance = EPSILON
  }

  const dw = Math.abs(s.w - ss.w)
  const dh = Math.abs(s.h - ss.h)

  // smaller-or-equal instead of smaller-than to make tolerance=0 work.
  return dw + dh <= tolerance
}
