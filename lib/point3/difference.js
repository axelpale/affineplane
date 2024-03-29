// @affineplane.point3.difference(p, q)
// @affineplane.point3.diff
// @affineplane.point3.delta
// @affineplane.point3.vectorTo
//
// A vector from point p to point q.
//
// Parameters:
//   p
//     a point3
//   q
//     a point3
//
// Return
//   a vec3
//
module.exports = (p, q) => {
  // Inverse of vector subtraction -(p - q)
  return {
    x: q.x - p.x,
    y: q.y - p.y,
    z: q.z - p.z
  }
}

require('../vec3/difference')
