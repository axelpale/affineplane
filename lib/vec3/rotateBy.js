module.exports = function (v, roll, pitch) {
  // affineplane.vec3.rotateBy(v, roll, pitch)
  //
  // Rotate vector by the given radian angles.
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
  if (!pitch) {
    pitch = 0
  }

  // Precompute trigs
  const cosroll = Math.cos(roll)
  const sinroll = Math.sin(roll)
  const cospitch = Math.cos(pitch)
  const sinpitch = Math.sin(pitch)
  // Rotate
  const xx = v.x * cosroll - v.y * sinroll
  const yy = v.x * sinroll + v.y * cosroll
  const zz = yy * sinpitch + v.z * cospitch
  const yyy = yy * cospitch - v.z * sinpitch
  // Return
  return {
    x: xx,
    y: yyy,
    z: zz
  }
}
