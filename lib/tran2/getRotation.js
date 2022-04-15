module.exports = function (tr) {
  // Get rotation in radians.
  //
  // Parameters:
  //   tr
  //     tran2
  //
  // Return:
  //   number, in radians
  //
  return Math.atan2(tr.b, tr.a)
}
