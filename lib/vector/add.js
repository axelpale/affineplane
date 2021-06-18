module.exports = (v, w) => {
  // Add two vectors. See vector.sum to add many vectors.
  //
  // Parameters
  //   v
  //     a vector
  //   w
  //     a vector
  //
  // Return
  //   a vector
  //
  return {
    x: v.x + w.x,
    y: v.y + w.y
  }
}
