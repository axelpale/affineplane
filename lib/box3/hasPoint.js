const getBasisInverse = require('./getBasisInverse')
const pointTransitFrom = require('../point3/transitFrom')

module.exports = function (box, point) {
  // @affineplane.box3.hasPoint(box, point)
  //
  // Test if a point is inside the box. If the point is at the box edge,
  // it is counted as being inside.
  //
  // Parameters:
  //   box
  //     a box3, in the reference basis.
  //   point
  //     a point3, in the reference basis.
  //
  // Return:
  //   a boolean
  //

  // Transit the point to the inner box basis for easier checking.
  const innerBasis = getBasisInverse(box)
  const innerPoint = pointTransitFrom(point, innerBasis)

  // Test the point
  const px = innerPoint.x
  const py = innerPoint.y
  const pz = innerPoint.z

  return (px >= 0 && px <= box.w &&
    py >= 0 && py <= box.h &&
    pz >= 0 && pz <= box.d)
}
