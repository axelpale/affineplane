module.exports = (p, vec) => {
  // Parameters:
  //   p
  //     point2
  //   vec
  //     vector2
  //
  // Return
  //   point2, translated by the vector
  //
  return {
    x: p.x + vec.x,
    y: p.y + vec.y
  }
}
