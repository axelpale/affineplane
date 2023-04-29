const EPSILON = require('../epsilon')
const abs = Math.abs

module.exports = (r, rr, epsilon) => {
  // @affineplane.ray3.almostEqual(r, rr[, epsilon])
  //
  // Test if rays are almost equal by the margin of epsilon.
  //
  // Parameters
  //   r
  //     a ray3
  //   rr
  //     a ray3
  //   epsilon
  //     Optional number, default to affineplane.epsilon.
  //     Set to 0 for strict comparison.
  //
  // Return
  //   a boolean
  //
  if (typeof epsilon !== 'number') {
    epsilon = EPSILON
  }

  const dx = abs(r.x - rr.x)
  const dy = abs(r.y - rr.y)
  const dz = abs(r.z - rr.z)
  const ddx = abs(r.dx - rr.dx)
  const ddy = abs(r.dy - rr.dy)
  const ddz = abs(r.dz - rr.dz)

  // Use "<=" instead of "<" to include epsilon=0.
  return dx + dy + dz + ddx + ddy + ddz <= epsilon
}
