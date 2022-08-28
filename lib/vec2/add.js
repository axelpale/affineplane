module.exports = (v, w) => {
  // affineplane.vec2.add(v, w)
  //
  // Add two vectors. See vector.sum to add many vectors.
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
    x: v.x + w.x,
    y: v.y + w.y
  }
}
