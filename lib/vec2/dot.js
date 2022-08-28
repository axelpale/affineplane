module.exports = (v, w) => {
  // affineplane.vec2.dot(v, w)
  //
  // Dot product of two vectors.
  //
  // Parameters:
  //   v
  //     a vec2
  //   w
  //     a vec2
  //
  // Return
  //   a number
  //
  return v.x * w.x + v.y * w.y
}
