const EPSILON = require('../epsilon')

module.exports = (v, w, epsilon) => {
  // affineplane.vec3.almostEqual(v, w, [epsilon])
  //
  // Test if vectors are almost equal by the margin of epsilon.
  //
  // Parameters
  //   v
  //     a vec3
  //   w
  //     a vec3
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

  const dx = Math.abs(v.x - w.x)
  const dy = Math.abs(v.y - w.y)
  const dz = Math.abs(v.z - w.z)

  // Use "<=" instead of "<" to make epsilon=0 work.
  return dx + dy + dz <= epsilon
}
