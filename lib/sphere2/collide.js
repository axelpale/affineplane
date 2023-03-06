module.exports = (c, cc) => {
  // @affineplane.sphere2.collide(c, cc)
  //
  // Detect collision between two spheres.
  //
  // Parameters:
  //   c
  //     a sphere2
  //   cc
  //     a sphere2
  //
  // Return
  //   boolean, true if the spheres collide
  //

  // point distance smaller than radius sum
  //   sqrt(dx^2 + dy^2) <= limit
  // Use <= instead of < because the same origin spheres collide even if r = 0.
  const dx = cc.x - c.x
  const dy = cc.y - c.y
  const limit = cc.r + c.r
  // Replace square root by multiplication.
  return dx * dx + dy * dy <= limit * limit
}
