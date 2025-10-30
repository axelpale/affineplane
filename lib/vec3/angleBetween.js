const EPSILON = require('../epsilon')

module.exports = (v, w) => {
  // @affineplane.vec3.angleBetween(v, w)
  //
  // Measure the smallest angle between vector v and w.
  // Always positive.
  // Computes the arccosine of the dot product,
  // divided by the geometric mean of the magnitudes.
  //
  // Parameters:
  //   v
  //     a vec3
  //   w
  //     a vec3
  //
  // Return
  //   a number in range [0, π], the angle in radians.
  //

  const dot = v.x * w.x + v.y * w.y + v.z * w.z
  const mv2 = v.x * v.x + v.y * v.y + v.z * v.z
  const mw2 = w.x * w.x + w.y * w.y + w.z * w.z

  if (mv2 < EPSILON || mw2 < EPSILON) {
    return 0
  }

  const div = Math.sqrt(mv2 * mw2)

  return Math.acos(dot / div)
}
