module.exports = (v) => {
  // affineplane.vec3.toPolar(v)
  //
  // Get cylindrical polar coordinates of a vector.
  //
  // Parameters
  //   v
  //     a vec3
  //
  // Return
  //   object with properties
  //     magnitude
  //       a number, the radial distance, the distance from z axis.
  //     direction
  //       a number, the azimuth angle in radians.
  //     depth
  //       a number, the z coordinate, the axial position.
  //
  return {
    magnitude: Math.sqrt(v.x * v.x + v.y * v.y),
    direction: Math.atan2(v.y, v.x),
    depth: v.z
  }
}
