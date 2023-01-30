const sin = Math.sin
const cos = Math.cos

module.exports = (radius, direction, depth) => {
  // @affineplane.vec3.fromPolar(radius, direction, depth)
  //
  // Create a vector from cylindrical polar coordinates.
  // See also affineplane.vec3.toPolar.
  //
  // Parameters:
  //   radius
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
    x: radius * cos(direction),
    y: radius * sin(direction),
    z: depth
  }
}
