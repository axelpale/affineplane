module.exports = (v, w) => {
  // Element-wise minimum of two vectors
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
    x: Math.min(v.x, w.x),
    y: Math.min(v.y, w.y)
  }
}
