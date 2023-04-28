module.exports = (r) => {
  // @affineplane.ray3.copy(r)
  //
  // Copy ray object.
  //
  // Parameters
  //   r
  //     a ray3
  //
  // Return
  //   a ray3
  //
  return {
    x: r.x,
    y: r.y,
    z: r.z,
    dx: r.dx,
    dy: r.dy,
    dz: r.dz
  }
}
