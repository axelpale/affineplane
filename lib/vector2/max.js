module.exports = (v, w) => {
  // affineplane.vector2.max(v, w)
  // Element-wise maximum of two vectors.
  //
  // Parameters
  //   v
  //     a vector2
  //   w
  //     a vector2
  //
  // Return
  //   a vector2
  //
  return {
    x: Math.max(v.x, w.x),
    y: Math.max(v.y, w.y)
  }
}
