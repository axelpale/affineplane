module.exports = (p, vec) => {
  // affineplane.point2.translate(p, vec)
  //
  // Translate the point by the given vector.
  //
  // Parameters:
  //   p
  //     a point2
  //   vec
  //     a vector2
  //
  // Return
  //   a point2
  //
  return {
    x: p.x + vec.x,
    y: p.y + vec.y
  }
}
