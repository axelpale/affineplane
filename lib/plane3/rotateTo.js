// @affineplane.plane3.rotateTo(plane, center, radians)
//
// Rotate the plane around a line parallel to z-axis
// and which goes though the given center point.
// After the rotation, the x-axis of the plane
// points to the given direction.
// The point where the line intersects the plane
// stays fixed during the operation.
//
// Parameter
//   plane
//     a plane3, the plane to rotate.
//     .. Represented on the reference plane.
//   center
//     a point3, the point that defines the
//     .. line around which to rotate.
//     .. Represented on the reference plane.
//   radians
//     a number, angle to rotate to.
//     .. Relative to the reference plane x-axis.
//
// Return
//   a plane3, the plane after rotation.
//
const rotateBy = require('./rotateBy')

module.exports = function (plane, center, radians) {
  // Find difference between current angle and the given angle
  const r = Math.atan2(plane.b, plane.a)
  return rotateBy(plane, center, radians - r)
}
