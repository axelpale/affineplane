const EPSILON = require('../epsilon')

module.exports = function (tr) {
  // @affineplane.helm3.invert(tr)
  // @affineplane.helm3.inverse(tr)
  //
  // Invert the transform. A transform from B to C
  // becomes a transform from C to B.
  //
  // Parameters
  //   tr
  //     a helm3
  //
  // Return
  //   a helm3, inversed transform
  //

  // Test if singular transformation. These might occur when all the range
  // points are the same, forcing the scale to drop to zero.
  //
  // Note that deta is the determinant of the first 2x2 block matrix,
  // not the whole matrix. The full determinant is deta^(3/2) thus
  // it is sufficient for epsilon testing.
  const deta = tr.a * tr.a + tr.b * tr.b
  if (deta < EPSILON) {
    throw new Error('Singular transformations cannot be inversed.')
  }

  // Inversion of a block-upper-triangular matrix
  //       a -b  0  x     A  X
  // T  =  b  a  0  y  =
  //       0  0  m  z     0  B
  //       0  0  0  1
  // where m = sqrt(a*a+b*b)
  //
  // We know from [1] that:
  //         iA  Y
  //   iT =
  //         0   iB
  // where Y = -iA X iB
  //
  // iA = 1/det(A) * adj(A) = 1/(a*a+b*b)  a  b
  //                                      -b  a
  //
  // iB = 1/det(B) * adj(B) = 1/m  1 -z  =  1/m -z/m
  //                               0  m      0    1
  //
  // Y = -iA X iB = 1/(m*m*m) * -a -b * 0  x * 1 -z
  //                             b -a   0  y   0  m
  //   = m^(-3) * 0 -ax-by * 1 -z
  //              0  bx-ay   0  m
  //   = m^(-3) * 0 (-ax-by)m
  //              0  (bx-ay)m
  //   = m^(-2) * 0 -ax-by
  //              0  bx-ay
  //
  // [1] https://math.stackexchange.com/a/2316569/86837

  const ahat = tr.a / deta
  const bhat = -tr.b / deta

  const xhat = (-tr.a * tr.x - tr.b * tr.y) / deta
  const yhat = (tr.b * tr.x - tr.a * tr.y) / deta
  const zhat = -tr.z / Math.sqrt(deta)

  return {
    a: ahat,
    b: bhat,
    x: xhat,
    y: yhat,
    z: zhat
  }
}
