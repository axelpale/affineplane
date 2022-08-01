const magnitude = require('./magnitude')
const sqrt = Math.sqrt
const atan2 = Math.atan2

module.exports = (v) => {
  // affineplane.vec3.toPolar(v)
  //
  // Get spherical polar coordinates for a vector.
  // See also affineplane.vec3.fromPolar.
  //
  // Parameters:
  //   v
  //     a vec3
  //
  // Returns:
  //   object with properties:
  //     magnitude
  //       a number, the length of the vector.
  //     roll
  //       a number, the roll angle in radians.
  //     pitch
  //       a number, the pitch angle in radians.
  //

  const magn = magnitude(v)
  const pitch = atan2(v.z, v.y)
  const yhat = sqrt(v.z * v.z + v.y * v.y)
  const roll = atan2(yhat, v.x)

  return {
    magnitude: magn,
    roll: roll,
    pitch: pitch
  }
}
