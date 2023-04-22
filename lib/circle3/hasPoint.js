const EPSILON = require('../epsilon')

module.exports = (c, point) => {
  // @affineplane.circle3.hasPoint(c, point)
  //
  // Detect collision between a circle and a point.
  //
  // Parameters:
  //   c
  //     a circle3
  //   point
  //     a point2
  //
  // Return
  //   boolean, true if the point is at the edge or inside the circle.
  //

  const dx = point.x - c.x
  const dy = point.y - c.y
  const dz = point.z - c.z

  if (Math.abs(dz) <= EPSILON) {
    // Close enough along z.
    // Test if within radius from the circle center.
    const limit = c.r
    // Replace a square root by multiplication
    return dx * dx + dy * dy <= limit * limit
  }

  return false
}
