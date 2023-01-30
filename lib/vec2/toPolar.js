module.exports = (v) => {
  // @affineplane.vec2.toPolar(v)
  //
  // Get polar coordinates of a vector.
  //
  // Parameters
  //   v
  //     a vec2
  //
  // Return
  //   an object with properties:
  //     radius
  //       a number, the radial distance, the distance from z-axis.
  //     magnitude
  //       alias for radius. Will be removed in affineplane v3.
  //     direction
  //       a number, the azimuth angle in radians.
  //
  const radius = Math.sqrt(v.x * v.x + v.y * v.y)
  return {
    radius,
    magnitude: radius, // TODO remove in v3
    direction: Math.atan2(v.y, v.x)
  }
}
