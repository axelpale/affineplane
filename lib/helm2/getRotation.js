module.exports = function (tr) {
  // affineplane.helm2.getRotation(tr)
  //
  // Get the rotation component of the transform in radians.
  //
  // Parameters:
  //   tr
  //     a helm2
  //
  // Return:
  //   a number, in radians
  //
  return Math.atan2(tr.b, tr.a)
}
