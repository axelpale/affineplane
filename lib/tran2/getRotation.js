module.exports = function (tr) {
  // affineplane.tran2.getRotation(tr)
  //
  // Get the rotation component of the transform in radians.
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
