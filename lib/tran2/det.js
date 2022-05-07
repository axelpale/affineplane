module.exports = (tr) => {
  // The matrix determinant of the transformation. If the determinant equals
  // zero then the matrix cannot be inverted and thus is not a valid
  // transformation. In practice, determinants close to zero are also
  // problematic due to floating point arithmetics.
  //
  // Parameters
  //   tr
  //     a tran2
  //
  // Return
  //   a number, the determinant.
  //
  /// See note 2015-10-26-16-30 for analysis.
  return tr.da * tr.da + tr.db * tr.db
}
