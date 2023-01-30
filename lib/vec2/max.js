module.exports = (v, w) => {
  // @affineplane.vec2.max(v, w)
  //
  // Element-wise maximum of two vectors.
  //
  // Parameters
  //   v
  //     a vec2
  //   w
  //     a vec2
  //
  // Return
  //   a vec2
  //
  return {
    x: Math.max(v.x, w.x),
    y: Math.max(v.y, w.y)
  }
}
