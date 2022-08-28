module.exports = (p, vec) => {
  // affineplane.point2.translate(p, vec)
  // affineplane.point2.move
  //
  // Translate the point by the given vector.
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
