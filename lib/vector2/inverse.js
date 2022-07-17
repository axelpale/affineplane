module.exports = (v) => {
  // affineplane.vector2.inverse(v)
  // Negate the vector.
  //
  // Parameters
  //   v
  //     a vector2
  //
  // Return
  //   a vector2
  //
  return {
    x: -v.x,
    y: -v.y
  }
}
