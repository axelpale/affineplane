const EPSILON = require('../epsilon')

module.exports = (v, w, epsilon) => {
  // affineplane.vector2.almostEqual(v, w, [epsilon])
  // Test if two vectors v and w are almost equal by the margin of epsilon.
  //
  // Parameters
  //   v
  //     a vector2
  //   w
  //     a vector2
  //   epsilon
  //     optional number, default to affineplane.EPSILON.
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

  // Use "<=" instead of "<" to make epsilon=0 work.
  return dx + dy <= epsilon
}
