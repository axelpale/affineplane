module.exports = (v, w) => {
  // @affineplane.vec2.min(v, w)
  //
  // Element-wise minimum of two vectors
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
    x: Math.min(v.x, w.x),
    y: Math.min(v.y, w.y)
  }
}
