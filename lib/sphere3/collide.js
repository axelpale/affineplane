module.exports = (c, cc) => {
  // @affineplane.sphere3.collide(c, cc)
  //
  // Detect collision between two spheres.
  //
  // Parameters:
  //   c
  //     a sphere3
  //   cc
  //     a sphere3
  //
  // Return
  //   boolean, true if the spheres collide
  //

  // point distance smaller than radius sum
  //   sqrt(dx^2 + dy^2 + dz^2) <= limit
  // Use <= instead of < because the same origin spheres collide even if r = 0.
  const dx = cc.x - c.x
  const dy = cc.y - c.y
  const dz = cc.z - c.z
  const limit = cc.r + c.r
  // Replace square root by multiplication.
  return dx * dx + dy * dy + dz * dz <= limit * limit
}
