module.exports = (r) => {
  // @affineplane.ray3.invert(r)
  // @affineplane.ray3.negate
  //
  // Get a ray with the same magnitude but to opposite direction.
  //
  // Parameters:
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
    dx: -r.dx,
    dy: -r.dy,
    dz: -r.dz
  }
}
