// affineplane.plane2.rotateTo(plane, center, radians)
//
// Rotate the plane around a point so that after the rotation,
// the x-axis of the plane points to the given direction.
// The center point stays fixed during the operation.
//
// Parameter
//   plane
//     a plane2, the plane to rotate.
//     .. Represented on the reference plane.
//   center
//     a point2, the point around which to rotate.
//     .. Represented on the reference plane.
//   radians
//     a number, angle to rotate to.
//     .. Relative to the reference plane x-axis.
//
// Return
//   a plane2, the plane after rotation.
//
const rotateBy = require('./rotateBy')

module.exports = function (plane, center, radians) {
  // Find difference between current angle and the given angle
  const r = Math.atan2(plane.b, plane.a)
  return rotateBy(plane, center, radians - r)
}
