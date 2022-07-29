const EPSILON = require('../epsilon')

module.exports = (p, q, epsilon) => {
  // affineplane.point3.almostEqual(p, q, [epsilon])
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
  //     Set to 0 for strict comparison.
  //
  // Return
  //   a boolean
  //
  if (typeof epsilon !== 'number') {
    epsilon = EPSILON
  }

  const dx = Math.abs(q.x - p.x)
  const dy = Math.abs(q.y - p.y)
  const dz = Math.abs(q.z - p.z)

  // Use "<=" instead of "<" to make epsilon=0 work.
  return dx + dy + dz <= epsilon
}
