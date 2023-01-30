// @affineplane.plane3.rotateBy(plane, center, radians)
//
// Rotate the given plane in the reference space around
// a line parallel to z-axis and which goes through
// the given center point. The plane z depth is preserved.
//
// Parameter
//   plane
//     a plane3 in the reference space.
//     .. The plane to rotate.
//   center
//     a point3, a point in the reference space.
//     .. Defines the line around which to rotate.
//   radians
//     a number, angle in radians, direction x -> y.
//
// Return
//   a plane3 on the reference plane after rotation.
//
module.exports = function (plane, center, radians) {
  const co = Math.cos(radians)
  const si = Math.sin(radians)

  const cx = center.x
  const cy = center.y

  const ahat = plane.a * co - plane.b * si
  const bhat = plane.a * si + plane.b * co
  const xhat = (plane.x - cx) * co - (plane.y - cy) * si + cx
  const yhat = (plane.x - cx) * si + (plane.y - cy) * co + cy

  return {
    a: ahat,
    b: bhat,
    x: xhat,
    y: yhat,
    z: plane.z
  }
}
