const epsilon = require('../epsilon')
const cross = require('./cross')
const abs = Math.abs

module.exports = (v, w) => {
  // @affineplane.vec3.independent(v, w)
  //
  // Test if the two vectors are [linearly independent](
  // https://en.wikipedia.org/wiki/Linear_independence) or almost so
  // within the margin of affineplane.epsilon.
  //
  // Parameters:
  //   v
  //     a vec3
  //   w
  //     a vec3
  //
  // Return
  //   a boolean, true if vectors are independent.
  //

  // Dependent when the cross product is zero.
  // Independnet when non-zero
  const c = cross(v, w)
  return abs(c.x) + abs(c.y) + abs(c.z) > epsilon
}
