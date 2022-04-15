module.exports = (p, vec) => {
  // Parameters:
  //   p
  //     a point2
  //   vec
  //     a vector2
  //
  // Return
  //   a point2, translated by the vector
  //
  return {
    x: p.x + vec.x,
    y: p.y + vec.y
  }
}
