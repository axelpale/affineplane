module.exports = (tr, ts) => {
  // Combine two linear transformations.
  //
  // Parameters:
  //   tr
  //     transformation to be applied last
  //   ts
  //     transformation to be applied first
  //
  // Return
  //   tran2
  //
  return {
    da: tr.da * ts.da - tr.db * ts.db,
    db: tr.db * ts.da + tr.da * ts.db
  }
}
