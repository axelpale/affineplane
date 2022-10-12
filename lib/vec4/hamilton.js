module.exports = (v, w) => {
  // affineplane.vec4.hamilton(v, w)
  //
  // The Hamilton product of two quaternions.
  //
  // Parameters
  //   v
  //     a vec4
  //   w
  //     a vec4
  //
  // Return
  //   a vec4
  //
  return {
    r: v.r * w.r - v.x * w.x - v.y * w.y - v.z * w.z,
    x: v.r * w.x + v.x * w.r + v.y * w.z - v.z * w.y,
    y: v.r * w.y - v.x * w.z + v.y * w.r + v.z * w.x,
    z: v.r * w.z + v.x * w.y - v.y * w.x + v.z * w.r
  }
}
