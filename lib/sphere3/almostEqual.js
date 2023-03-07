const EPSILON = require('../epsilon')

module.exports = (c, d, tolerance) => {
  // @affineplane.sphere3.almostEqual(c, d[, tolerance])
  //
  // Test if two spheres are almost equal by the margin of tolerance.
  //
  // Parameters
  //   c
  //     a sphere3
  //   d
  //     a sphere3
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

  const dx = Math.abs(c.x - d.x)
  const dy = Math.abs(c.y - d.y)
  const dz = Math.abs(c.z - d.z)
  const dr = Math.abs(c.r - d.r)

  // Use "<=" instead of "<" to make tolerance=0 work.
  return dx + dy + dz + dr <= tolerance
}
