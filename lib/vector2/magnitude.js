module.exports = (v) => {
  // affineplane.vector2.magnitude(v)
  // The length of the vector.
  //
  // Parameters
  //   v
  //     a vector2
  //
  // Return
  //   a number
  //
  return Math.sqrt(v.x * v.x + v.y * v.y)
}
