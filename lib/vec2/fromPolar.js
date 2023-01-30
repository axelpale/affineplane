module.exports = (radius, direction) => {
  // @affineplane.vec2.fromPolar(radius, direction)
  //
  // Create a vector from polar coordinates.
  //
  // Parameters
  //   radius
  //     a number, radial length from the origin
  //   direction
  //     a number, angle in radians
  //
  // Return
  //   a vec2
  //
  return {
    x: radius * Math.cos(direction),
    y: radius * Math.sin(direction)
  }
}
