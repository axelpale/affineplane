module.exports = (v, w) => {
  // Parameters
  //   v
  //     vector3r
  //   w
  //     vector3r
  //
  // Return
  //   a vector3r
  return {
    x: v.x + w.x,
    y: v.y + w.y,
    z: v.z + w.z,
    r: v.r + w.r
  }
}
