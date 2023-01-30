module.exports = (v) => {
  // @affineplane.vec3.toPolar(v)
  //
  // Get cylindrical polar coordinates of a vector.
  //
  // Parameters
  //   v
  //     a vec3
  //
  // Return
  //   object with properties
  //     radius
  //       a number, the radial distance, the distance from z-axis.
  //     direction
  //       a number, the azimuth angle in radians.
  //     depth
  //       a number, the z coordinate, the axial position.
  //     magnitude
  //       alias for radius, will be removed in affineplane v3
  //
  const radius = Math.sqrt(v.x * v.x + v.y * v.y)
  return {
    radius,
    magnitude: radius, // TODO remove in v3
    direction: Math.atan2(v.y, v.x),
    depth: v.z
  }
}
