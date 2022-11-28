const epsilon = require('../epsilon')

module.exports = (p, q) => {
  // affineplane.point2.direction(p, q)
  //
  // Get direction from point to point.
  //
  // Parameters
  //   p
  //     a point2, the direction origin
  //   q
  //     a point2, the direction target
  //
  // Return
  //   a dir2, a unit vector. If no direction can be computed,
  //   .. for example in the case where the points are equal, then
  //   .. the direction will be { x: 1, y: 0 }
  //

  // Get vector
  const dx = q.x - p.x
  const dy = q.y - p.y
  // Magnitude
  const m = Math.sqrt(dx * dx + dy * dy)
  // Safeguard
  if (m < epsilon) {
    return { x: 1, y: 0 }
  }
  // Normalize
  return {
    x: dx / m,
    y: dy / m
  }
}
