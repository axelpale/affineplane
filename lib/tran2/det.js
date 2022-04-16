module.exports = (tr) => {
  // Transform matrix determinant.
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
