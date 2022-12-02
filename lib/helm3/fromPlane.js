module.exports = function (plane, origin) {
  // affineplane.helm3.fromPlane(plane, origin)
  //
  // Capture a Helmert transform from a plane.
  // In other words, convert a passive affine transformation to an active one.
  // The result answers to the task: create such Helmert transformation
  // so that when applied to an identity plane at the given origin,
  // it transforms the plane so that the result is equal to the given plane.
  //
  // Parameters:
  //   plane
  //     a plane3 on the reference plane
  //   origin
  //     a point3 on the reference plane.
  //
  // Return
  //   a helm3 on the reference plane
  //

  // Math derivation
  //
  // Consider an active affine transformation T_a = Ax + c, where
  // - A is a linear transformation
  // - x is an input vector
  // - c is a translation vector
  //
  // Then consider a passive affine transformation T_p = A(x - o) + o + c
  // that we receive when we apply the active transformation to a point o.
  //
  // Now, our task is to construct the original active transformation T_a
  // from the given T_p and the point o.
  // Let us denote T_p = A(x') + c', where x' = x - o and c' = c + o.
  //
  // In matrix form:
  //         a -b  0  tx'
  //   T_p = b  a  0  ty'
  //         0  0  m  tz'
  //         0  0  0  1
  // where m is the uniform dilation in z dimension, equal to norm of (a,b).
  //
  // We can represent the inner and outer translations by matrix O and its
  // inverse iO, so that T_a = iO * T_p * O.
  //
  // Let us open the matrices:
  //   1  0  0 -ox   a -b  0  tx'   1  0  0  ox
  //   0  1  0 -oy * b  a  0  ty' * 0  1  0  oy
  //   0  0  1 -oz   0  0  m  tz'   0  0  1  oz
  //   0  0  0  1    0  0  0  1     0  0  0  1
  //
  // Let us compute the matrix result:
  //   1  0  0 -ox   a -b  0  a*ox-b*oy+tx'   a -b  0  a*ox-b*oy+tx'-ox
  // = 0  1  0 -oy * b  a  0  b*ox+a*oy+ty' = b  a  0  b*ox+a*oy+ty'-oy
  //   0  0  1 -oz   0  0  m  m*oz+tz'        0  0  m  m*oz+tz'-oz
  //   0  0  0  1    0  0  0  1               0  0  0  1
  //

  const a = plane.a
  const b = plane.b
  const m = Math.sqrt(a * a + b * b)
  const ox = origin.x
  const oy = origin.y
  const oz = (origin.z ? origin.z : 0)

  return {
    a,
    b,
    x: a * ox - b * oy + plane.x - ox,
    y: b * ox + a * oy + plane.y - oy,
    z: m * oz + plane.z - oz
  }
}
