module.exports = (v) => {
  // affineplane.vec2.invert(v)
  // affineplane.vec2.negate
  //
  // Negate the vector. For example `inverse({ x: 1, y: -1 })` returns
  // `{ x: -1, y: 1 }`.
  //
  // Parameters
  //   v
  //     a vec2
  //
  // Return
  //   a vec2
  //
  return {
    x: -v.x,
    y: -v.y
  }
}
