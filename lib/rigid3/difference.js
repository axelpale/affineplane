module.exports = (v, w) => {
  // A rigid3 VW from point3r V to point3r W
  //
  // Parameters
  //   v
  //     a rigid3 from O to point3r V
  //   w
  //     a rigid3 from O to pointer W
  //
  // Return
  //   a rigid3
  //
  return {
    x: v.x - w.x,
    y: v.y - w.y,
    z: v.z - w.z,
    r: v.r - w.r
  }
}
