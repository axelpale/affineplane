module.exports = (v) => {
  // affineplane.vector2.inverse(v)
  //
  // Negate the vector. For example `inverse({ x: 1, y: -1 })` returns
  // `{ x: -1, y: 1 }`.
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
