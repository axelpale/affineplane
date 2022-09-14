module.exports = (tr) => {
  // affineplane.helm3.det(tr)
  // affineplane.helm3.determinant(tr)
  //
  // The matrix determinant of the transformation.
  // If the determinant equals zero then the matrix cannot be inverted and
  // thus is not a valid transformation.
  // In practice, determinants close to zero are also
  // problematic due to floating point arithmetics.
  //
  // Parameters
  //   tr
  //     a helm3
  //
  // Return
  //   a number, the determinant.
  //
  /// See 2022-09-14-11 for derivation. Astonishingly equals the scale^2.
  return tr.a * tr.a + tr.b * tr.b
}
