const magnitude = require('./magnitude')
const fromSpherical = require('./fromSpherical')

module.exports = function (v, roll, pitch) {
  // affineplane.vec3.rotateBy(v, roll, pitch)
  //
  // Rotate vector so that it points to the given radian angles.
  // The vector magnitude is preserved.
  // Roll is applied before pitch.
  //
  // Parameters
  //   v
  //     a vec3
  //   roll
  //     a number, roll angle in radians.
  //     .. Right-hand rotation around z axis.
  //   pitch
  //     optional number, pitch angle in radians. Default 0.
  //     .. Right-hand rotation around x axis.
  //
  // Return
  //   a vec3
  //
  const magn = magnitude(v)
  return fromSpherical(magn, roll, pitch)
}
