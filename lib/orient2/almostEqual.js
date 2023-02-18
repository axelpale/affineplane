const EPSILON = require('../epsilon')

module.exports = (p, q, tolerance) => {
  // @affineplane.orient2.almostEqual(p, q[, tolerance])
  //
  // Test if two orientations are almost equal within the tolerance.
  //
  // Parameters
  //   p
  //     an orient2
  //   q
  //     an orient2
  //   tolerance
  //     optional number, default to affineplane.epsilon.
  //     .. Set to 0 for strict comparison.
  //
  // Return
  //   a boolean
  //
  if (typeof tolerance !== 'number') {
    tolerance = EPSILON
  }

  const da = Math.abs(p.a - q.a)
  const db = Math.abs(p.b - q.b)

  // Use "<=" instead of "<" to make tolerance=0 work.
  return da + db <= tolerance
}
