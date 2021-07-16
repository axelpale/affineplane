// Formation: a point with set scale and orientation,
// encoded as { a, b, x, y } helmertian matrix.

const multiply = require('../transform/multiply')
const inverse = require('../transform/inverse')

// exports.toBasis = (form, targetBasis) => {
//   // Represent the formation on different basis.
//   // ≈ represent the same point in different coordinate system
//   //
//   // Parameters
//   //   form
//   //     a ABXY, a formation on the reference basis,
//   //     to be converted to the given basis.
//   //   targetBasis
//   //     a ABXY, a transition from the new basis to the reference basis.
//   //
//   // Return
//   //   a ABXY, the formation in the target basis
//   //
//   const inv = inverse(targetBasis)
//   return multiply(inv, form)
// }

// exports.fromBasis = (form, sourceBasis) => {
//   // Represent the formation on the reference basis.
//   // ≈ represent the point in the reference coordinate system
//   //
//   // Parameters
//   //   form
//   //     a ABXY, a formation on the given basis
//   //   sourceBasis
//   //     a ABXY, a transition from the form's original basis to
//   //     the reference basis.
//   //
//   // Return
//   //   a ABXY, the formation on the reference basis.
//   //
//   return multiply(sourceBasis, form)
// }

exports.rebase =
exports.transit =
exports.changeBasis = (form, sourceBasis, targetBasis) => {
  // Convert formation between bases.
  //
  // Parameters
  //   form
  //     a ABXY, a formation on the source basis.
  //   sourceBasis
  //     a ABXY, a transition from the source basis to
  //     the reference basis.
  //   targetBasis
  //     a ABXY, a transition from the target basis to
  //     the reference basis.
  //
  // Return
  //   a ABXY, formation on the targer basis.
  //
  const inv = inverse(targetBasis)
  return multiply(multiply(inv, sourceBasis), form)
}
