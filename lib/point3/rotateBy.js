module.exports = function (p, origin, roll, pitch) {
  // @affineplane.point3.rotateBy(p, origin, roll[, pitch])
  //
  // Rotate point around the given center point.
  // Roll is applied before pitch.
  //
  // Parameters
  //   p
  //     a point3
  //   origin
  //     a point3, the point around to rotate
  //   roll
  //     a number, roll angle in radians.
  //     .. Right-hand rotation around z-axis.
  //   pitch
  //     optional number, pitch angle in radians. Default 0.
  //     .. Right-hand rotation around x-axis.
  //
  // Return
  //   a point3
  //
  if (!pitch) {
    pitch = 0
  }

  // Put relative to origin
  const x = p.x - origin.x
  const y = p.y - origin.y
  const z = p.z - origin.z
  // Precompute trigs
  const cosroll = Math.cos(roll)
  const sinroll = Math.sin(roll)
  const cospitch = Math.cos(pitch)
  const sinpitch = Math.sin(pitch)
  // Rotate
  const xx = x * cosroll - y * sinroll
  const yy = x * sinroll + y * cosroll
  const zz = yy * sinpitch + z * cospitch
  const yyy = yy * cospitch - z * sinpitch
  // Put back relative to origin and return
  return {
    x: xx + origin.x,
    y: yyy + origin.y,
    z: zz + origin.z
  }
}
