const sin = Math.sin
const cos = Math.cos

module.exports = (magnitude, roll, pitch) => {
  // affineplane.vec3.fromSpherical(magnitude, roll, pitch)
  //
  // Create a vector from spherical polar coordinates.
  // See also affineplane.vec3.toSpherical.
  //
  // Parameters:
  //   magnitude
  //     a number, the length of the vector.
  //   roll
  //     a number, the roll angle in radians.
  //   pitch
  //     optional number, default 0. The pitch angle in radians.
  //
  // Return
  //   a vec3
  //

  // TODO use theta phi coordinates instead of euler angles. See dir3.

  if (!pitch) {
    pitch = 0
  }

  return {
    x: magnitude * cos(roll),
    y: magnitude * sin(roll) * cos(pitch),
    z: magnitude * sin(roll) * sin(pitch)
  }
}
