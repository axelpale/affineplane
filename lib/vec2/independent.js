const epsilon = require('../epsilon')

module.exports = (v, w) => {
  // affineplane.vec2.independent(v, w)
  //
  // Test if the two vectors are [linearly independent](
  // https://en.wikipedia.org/wiki/Linear_independence) or almost so
  // within the margin of affineplane.epsilon.
  //
  // Parameters:
  //   v
  //     a vec2
  //   w
  //     a vec2
  //
  // Return
  //   a boolean, true if vectors are independent.
  //

  // Dependent when determinant is zero
  // | v.x  w.x |
  // | v.y  w.y |
  //
  return Math.abs(v.x * w.y - v.y * w.x) > epsilon
}
