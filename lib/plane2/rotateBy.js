// affineplane.plane2.rotateBy(plane, center, radians)
//
// Rotate the given plane on the reference plane around
// a center point.
//
// Parameter
//   plane
//     a plane2 on the reference plane.
//     The plane to rotate.
//   center
//     a point2, a point on the reference plane.
//   radians
//     a number, angle in radians, direction x->y.
//
// Return
//   a plane2 on the reference plane after rotation.
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
    y: yhat
  }
}
