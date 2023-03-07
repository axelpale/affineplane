module.exports = (c, point) => {
  // @affineplane.sphere3.hasPoint(c, point)
  //
  // Detect collision between a sphere and a point.
  //
  // Parameters:
  //   c
  //     a sphere3
  //   point
  //     a point2
  //
  // Return
  //   boolean, true if the point is inside the sphere or at the surface.
  //

  const dx = point.x - c.x
  const dy = point.y - c.y
  const dz = point.z - c.z
  const limit = c.r
  // point distance smaller than radius
  // sqrt(dx^2 + dy^2 + dz^2) <= limit
  // Use <= cuz collide if point at sphere center even when r=0.

  // Replace square root by multiplication.
  return dx * dx + dy * dy + dz * dz <= limit * limit
}
