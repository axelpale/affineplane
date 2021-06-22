module.exports = (v, w) => {
  // A vector3r VW from point3r V to point3r W
  //
  // Parameters
  //   v
  //     a vector3r from O to point3r V
  //   w
  //     a vector3r from O to pointer W
  //
  // Return
  //   a vector3r
  //
  return {
    x: v.x - w.x,
    y: v.y - w.y,
    z: v.z - w.z,
    r: v.r - w.r,
  }
}
