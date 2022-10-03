module.exports = (deg) => {
  // affineplane.angle.degToRad(deg)
  //
  // Convert angle from degrees to radians, for example 720 becomes 4π.
  //
  // Parameters:
  //   deg
  //     a number, an angle in degrees.
  //
  // Return
  //   a number, the angle in radians.
  //
  return Math.PI * deg / 180
}
