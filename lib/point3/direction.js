const epsilon = require('../epsilon')

module.exports = (p, q) => {
  // affineplane.point3.direction(p, q)
  //
  // Get direction from point to point.
  //
  // Parameters:
  //   p
  //     a point3, the direction origin
  //   q
  //     a point3, the direction target
  //
  // Return
  //   a dir3, a unit vector. If no direction can be computed,
  //   .. for example in the case where the points are equal, then
  //   .. the direction will be { x: 1, y: 0, z: 0 }
  //

  // Get vector
  const dx = q.x - p.x
  const dy = q.y - p.y
  const dz = q.z - p.z
  // Magnitude
  const m = Math.sqrt(dx * dx + dy * dy + dz * dz)
  // Safeguard
  if (m < epsilon) {
    return { x: 1, y: 0, z: 0 }
  }
  // Normalize
  return {
    x: dx / m,
    y: dy / m,
    z: dz / m
  }
}
