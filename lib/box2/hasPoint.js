const getBasisInverse = require('./getBasisInverse')
const pointTransitFrom = require('../point2/transitFrom')

module.exports = function (box, point) {
  // @affineplane.box2.hasPoint(box, point)
  //
  // Test if a point is inside the box. If the point is at the box edge,
  // it is counted as being inside.
  //
  // Parameters:
  //   box
  //     a box2, in the reference basis.
  //   point
  //     a point2, in the reference basis.
  //
  // Return:
  //   a boolean
  //

  // Note: we thought it would be practical to count inner box (0,0) inside
  // and inner box (w,h) outside. However, due to rotation that makes things
  // confusing. Therefore all edge points are counted as inside.

  // Transit the point to the inner box basis for easier checking.
  const innerBasis = getBasisInverse(box)
  const innerPoint = pointTransitFrom(point, innerBasis)

  // Test the point
  const px = innerPoint.x
  const py = innerPoint.y

  return px >= 0 && px <= box.w && py >= 0 && py <= box.h
}
