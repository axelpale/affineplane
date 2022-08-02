module.exports = (tr) => {
  // affineplane.helm2.det(tr)
  // affineplane.helm2.determinant(tr)
  //
  // The matrix determinant of the transformation. If the determinant equals
  // zero then the matrix cannot be inverted and thus is not a valid
  // transformation. In practice, determinants close to zero are also
  // problematic due to floating point arithmetics.
  //
  // Parameters
  //   tr
  //     a helm2
  //
  // Return
  //   a number, the determinant.
  //
  /// See note 2015-10-26-16-30 for analysis.
  return tr.a * tr.a + tr.b * tr.b
}
