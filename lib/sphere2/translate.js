module.exports = (c, vec) => {
  // @affineplane.sphere2.translate(c, vec)
  //
  // Translate the circle by the vector. Does not affect radius.
  // See affineplane.sphere2.offset to translate by scalars.
  //
  // Parameters:
  //   c
  //     a sphere2
  //   vec
  //     a vec2
  //
  // Return
  //   a sphere2
  //
  return {
    x: c.x + vec.x,
    y: c.y + vec.y,
    r: c.r
  }
}
