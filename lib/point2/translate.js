module.exports = (p, vec) => {
  // Parameters:
  //   p
  //     a point
  //   vec
  //     a vector
  //
  // Return
  //   point, translated by the vector
  //
  return {
    x: p.x + vec.x,
    y: p.y + vec.y
  }
}
