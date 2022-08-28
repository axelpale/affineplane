module.exports = (magnitude, direction) => {
  // affineplane.vec2.fromPolar(magnitude, direction)
  //
  // Create a vector from polar coordinates.
  //
  // Parameters
  //   magnitude
  //     a number, length of the vector
  //   direction
  //     a number, angle in radians
  //
  // Return
  //   a vec2
  //
  return {
    x: magnitude * Math.cos(direction),
    y: magnitude * Math.sin(direction)
  }
}
