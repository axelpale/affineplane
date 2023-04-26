const EPSILON = require('../epsilon')

module.exports = (c, cc) => {
  // @affineplane.circle3.collide(c, cc)
  // @affineplane.circle3.collideCircle(c, cc)
  //
  // Detect collision between two circles.
  //
  // Parameters:
  //   c
  //     a circle3
  //   cc
  //     a circle3
  //
  // Return
  //   boolean, true if the circles collide
  //

  // Have separation along z?
  const dz = cc.z - c.z
  if (Math.abs(dz) > EPSILON) {
    return false
  }

  // pole distance smaller than radius sum
  //   sqrt(dx^2 + dy^2) <= limit
  // Use <= instead of < because the same origin spheres collide even if r = 0.
  const dx = cc.x - c.x
  const dy = cc.y - c.y
  const limit = cc.r + c.r

  // Replace square root by multiplication.
  return dx * dx + dy * dy <= limit * limit
}
