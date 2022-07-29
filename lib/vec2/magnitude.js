module.exports = (v) => {
  // affineplane.vec2.magnitude(v)
  // The length of the vector.
  //
  // Parameters
  //   v
  //     a vec2
  //
  // Return
  //   a number
  //
  return Math.sqrt(v.x * v.x + v.y * v.y)
}
