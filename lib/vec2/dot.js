module.exports = (v, w) => {
  // @affineplane.vec2.dot(v, w)
  //
  // The dot product of two vectors,
  // also called the scalar product.
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
