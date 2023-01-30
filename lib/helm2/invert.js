const EPSILON = require('../epsilon')

module.exports = function (tr) {
  // @affineplane.helm2.invert(tr)
  // @affineplane.helm2.inverse(tr)
  //
  // Invert the transform. A transform from B to C
  // becomes a transform from C to B.
  //
  // Parameters
  //   tr
  //     a helm2
  //
  // Return
  //   a helm2, inversed transform
  //

  // Test if singular transformation. These might occur when all the range
  // points are the same, forcing the scale to drop to zero.
  // See note 2015-10-26-16-30 for analysis
  const det = tr.a * tr.a + tr.b * tr.b
  if (Math.abs(det) < EPSILON) {
    throw new Error('Singular transformations cannot be inversed.')
  }

  const ahat = tr.a / det
  const bhat = -tr.b / det
  const xhat = (-tr.a * tr.x - tr.b * tr.y) / det
  const yhat = (tr.b * tr.x - tr.a * tr.y) / det

  return {
    a: ahat,
    b: bhat,
    x: xhat,
    y: yhat
  }
}
