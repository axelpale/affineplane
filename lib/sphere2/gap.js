module.exports = (c, cc) => {
  // @affineplane.sphere2.gap(c, cc)
  //
  // The gap distance between the two spheres is the closest distance between
  // their surfaces. The gap is zero or negative when the spheres collide.
  //
  // Parameters
  //   c
  //     a sphere2
  //   cc
  //     a sphere2
  //
  // Return
  //   a scalar1, a number, the closest distance between the sphere surfaces.
  //
  const dx = c.x - cc.x
  const dy = c.y - cc.y
  const pad = c.r + cc.r
  return Math.sqrt(dx * dx + dy * dy) - pad
}
