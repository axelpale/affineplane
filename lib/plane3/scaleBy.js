// affineplane.plane3.scaleBy(plane, center, multiplier)
//
// Create a plane that is scaled by the multiplier around
// a center point. The center point is allowed to be off the plane.
// The scaling is performed about this center point.
//
// For example, if a plane P with basis vectors
//   ex = (1,0,0), ey = (0,1,0), ez = (0,1,0)
// is scaled by 2, the basis vectors of the new plane P_hat are
//   ex_hat = (2,0,0), ey_hat = (0,2,0), ez_hat = (0,0,2)
// meaning that 3 units on P_hat are 6 units on P.
//
// Parameters:
//   plane
//     a plane3 on the reference plane
//   center
//     a point3 on the reference plane
//   multiplier
//     a number, the scaling factor
//
// Return:
//   a plane3, a scaled plane
//
const EPSILON = require('../epsilon')

module.exports = function (plane, center, multiplier) {
  const m = multiplier // alias

  if (m < EPSILON) {
    const msg = 'Expected positive scale factor but saw zero or negative: '
    throw new Error(msg + m)
  }

  // Allow 2D center, default on the plane.
  const cz = typeof center.z === 'number' ? center.z : plane.z

  return {
    a: m * plane.a,
    b: m * plane.b,
    x: m * plane.x + (1 - m) * center.x,
    y: m * plane.y + (1 - m) * center.y,
    z: m * plane.z + (1 - m) * cz
  }
}
