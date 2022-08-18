module.exports = (origin, unit) => {
  // Create a line from origin point and unit vector.
  //
  // Parameters:
  //   origin
  //     a point2
  //   unit
  //     a vec2
  //
  // Return
  //   a line2
  //
  return {
    a: unit.x,
    b: unit.y,
    x: origin.x,
    y: origin.y
  }
}
