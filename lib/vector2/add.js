module.exports = (v, w) => {
  // Add two vectors. See vector.sum to add many vectors.
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
    x: v.x + w.x,
    y: v.y + w.y
  }
}
