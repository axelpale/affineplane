module.exports = function (tr) {
  // Get rotation in radians.
  //
  // Parameters:
  //   tr
  //     a tran2
  //
  // Return:
  //   a number, in radians
  //
  return Math.atan2(tr.b, tr.a)
}
