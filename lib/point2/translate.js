module.exports = (p, vec) => {
  // @affineplane.point2.translate(p, vec)
  // @affineplane.point2.move
  //
  // Translate the point by the given vector.
  // See affineplane.point2.offset to translate by scalars.
  //
  // Parameters:
  //   p
  //     a point2
  //   vec
  //     a vec2
  //
  // Return
  //   a point2
  //
  return {
    x: p.x + vec.x,
    y: p.y + vec.y
  }
}
