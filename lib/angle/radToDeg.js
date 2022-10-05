module.exports = (rad) => {
  // affineplane.angle.radToDeg(rad)
  //
  // Convert angle from radians to degrees. For example 4π becomes 720.
  //
  // Parameters:
  //   rad
  //     a number, an angle in radians.
  //
  // Return
  //   a number, the angle in degrees.
  //
  return 180 * rad / Math.PI
}
