module.exports = (tr) => {
  // @affineplane.helm2.snapRotation(tr)
  //
  // Round the rotation property of the transformation
  // to nearest orthogonal angle 0, 90, 180, and 270 deg.
  // Note that if the given transform has exact 45, 135, 225, or 315 deg
  // rotation then the nearest orthogonal angle is arbitrarily either the next
  // or previous orthogonal angle due to the variation caused by
  // floating-point arithmetics.
  //
  // Parameters:
  //   tr
  //     a helm2
  //
  // Return
  //   a helm2
  //

  // Test if already orthogonal
  if (tr.a === 0 || tr.b === 0) {
    return tr
  }

  // TODO Test if near orthogonal within epsilon
  // and treat without division, with a slight inaccuracy to scale.

  const a = tr.a
  const b = tr.b

  const absa = Math.abs(tr.a)
  const absb = Math.abs(tr.b)

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

  // Rotate
  const ahat = a * r0 - b * r1
  const bhat = a * r1 + b * r0

  return {
    a: ahat,
    b: bhat,
    x: tr.x,
    y: tr.y
  }
}
