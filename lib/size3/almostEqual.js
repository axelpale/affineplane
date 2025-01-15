const EPSILON = require('../epsilon')

module.exports = function (s, ss, tolerance) {
  // @affineplane.size3.almostEqual(s, ss[, tolerance])
  //
  // Test if two sizes are equal within tolerance.
  //
  // Parameters:
  //   s
  //     a size3
  //   ss
  //     a size3
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
  const dd = Math.abs(s.d - ss.d)

  // smaller-or-equal instead of smaller-than to make tolerance=0 work.
  return dw + dh + dd <= tolerance
}
