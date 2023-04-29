const EPSILON = require('../epsilon')

module.exports = (v, w, epsilon) => {
  // @affineplane.vec4.almostEqual(v, w[, epsilon])
  //
  // Test if vectors are almost equal by the margin of epsilon.
  //
  // Parameters
  //   v
  //     a vec4
  //   w
  //     a vec4
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

  const dx = Math.abs(v.x - w.x)
  const dy = Math.abs(v.y - w.y)
  const dz = Math.abs(v.z - w.z)
  const dw = Math.abs(v.w - w.w)

  // Use "<=" instead of "<" to include epsilon=0.
  return dx + dy + dz + dw <= epsilon
}
