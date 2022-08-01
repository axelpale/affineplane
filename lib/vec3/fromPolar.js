const sin = Math.sin
const cos = Math.cos

module.exports = (magnitude, direction, depth) => {
  // affineplane.vec3.fromPolar(magnitude, direction, depth)
  //
  // Create a vector from cylindrical polar coordinates.
  // See also affineplane.vec3.toPolar.
  //
  // Parameters:
  //   magnitude
  //     a number, the radial distance from z-axis.
  //   direction
  //     a number, the azimuth angle in radians.
  //   depth
  //     optional number, default 0. The z coordinate.
  //
  // Return
  //   a vec3
  //

  if (!depth) {
    depth = 0
  }

  return {
    x: magnitude * cos(direction),
    y: magnitude * sin(direction),
    z: depth
  }
}
