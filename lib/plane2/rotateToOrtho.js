// affineplane.plane2.rotateToOrtho(plane, center)
//
// Rotate plane to nearest orthogonal angle 0, 90, 180, and 270 deg
// with respect to the reference plane.
//
// Parameters:
//   plane
//     a plane2 to rotate.
//   center
//     a point2, a point on the reference plane. The rotation center.
//
// Return
//   a plane2
//
// Note that if the plane is at the middle of two ortho angles,
// namely at 45, 135, 225, or 315 deg, then
// the nearest orthogonal angle is arbitrarily either the next
// or previous orthogonal angle due to the small variations
// caused by floating-point arithmetics.
//
module.exports = (plane, center) => {
  // Test if already orthogonal
  if (plane.a === 0 || plane.b === 0) {
    return plane
  }

  // TODO Test if near orthogonal within epsilon
  // and treat without division, with a slight inaccuracy to scale.

  const a = plane.a
  const b = plane.b
  const x = plane.x
  const y = plane.y

  const absa = Math.abs(a)
  const absb = Math.abs(b)

  // Compute scale
  const a2b2 = absa * absa + absb * absb
  const c = Math.sqrt(a2b2)

  // Rotation matrix [r0 -r1]
  let r0, r1 //      [r1  r0]

  // Compute rotation arguments
  if (absa <= absb) {
    // a is nearest to zero
    if (b < 0) {
      r0 = -b / c
      r1 = -a / c
    } else {
      r0 = b / c
      r1 = a / c
    }
  } else {
    // b is nearest to zero or a and b equal
    if (a < 0) {
      r0 = -a / c
      r1 = b / c
    } else {
      r0 = a / c
      r1 = -b / c
    }
  }

  // Center
  const cx = center.x
  const cy = center.y

  // Rotation around the center
  const ahat = a * r0 - b * r1
  const bhat = a * r1 + b * r0
  const xhat = (x - cx) * r0 - (y - cy) * r1 + cx
  const yhat = (x - cx) * r1 + (y - cy) * r0 + cy

  return {
    a: ahat,
    b: bhat,
    x: xhat,
    y: yhat
  }
}
