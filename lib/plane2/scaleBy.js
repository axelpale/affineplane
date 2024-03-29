// @affineplane.plane2.scaleBy(plane, center, multiplier)
//
// Create a plane that is scaled by the multiplier around
// a center point. For example, if a plane with basis vectors
// ex = (1,0), ey = (0,1) is scaled by 2, the basis vectors
// of the new plane are ex_hat = (2,0), ey_hat = (0,2).
//
// Parameters:
//   plane
//     a plane2 on the reference plane
//   center
//     a point2 on the reference plane
//   multiplier
//     a number, the scaling factor
//
// Return:
//   a plane2, a scaled plane
//
const EPSILON = require('../epsilon')

module.exports = function (plane, center, multiplier) {
  const m = multiplier // alias

  if (m < EPSILON) {
    const msg = 'Expected positive scale factor but saw zero or negative: '
    throw new Error(msg + m)
  }

  return {
    a: m * plane.a,
    b: m * plane.b,
    x: m * plane.x + (1 - m) * center.x,
    y: m * plane.y + (1 - m) * center.y
  }
}
