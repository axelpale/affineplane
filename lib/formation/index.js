// Formation: a point with set scale and orientation,
// encoded as { a, b, x, y } helmertian matrix.

exports.toBasis = (form, targetBasis) => {
  // Represent the formation on different basis.
  // ≈ represent the same point in different coordinate system
  //
  // Parameters
  //   form
  //     a ABXY, a formation on the reference basis,
  //     to be converted to the given basis.
  //   basis
  //     a ABXY, a transition from the reference basis to the new basis.
  //
  // Return
  //   a ABXY, the formation in the target basis
  //
}

exports.fromBasis = (form, sourceBasis) => {
  // Represent the formation on the reference basis.
  // ≈ represent the point in the reference coordinate system
  //
  // Parameters
  //   form
  //     a ABXY, a formation on the given basis
  //   sourceBasis
  //     a ABXY, a transition from the reference basis to
  //     the form's original basis.
  //
  // Return
  //   a ABXY, the formation on the reference basis.
  //
}

exports.rebase =
exports.changeBasis = (form, sourceBasis, targetBasis) => {
  // Convert formation between bases.
  //
  // Parameters
  //   form
  //     a ABXY, a formation on the source basis.
  //   sourceBasis
  //     a ABXY, a transition from the reference basis to
  //     the source basis.
  //   targetBasis
  //     a ABXY, a transition from the reference basis to
  //     the target basis.
  //
  // Return
  //   a ABXY, formation on the targer basis.
  //
}
