// affineplane.helm3.getRotation(tr)
//
// Get the rotation component of the transform in radians.
// This is rotation around z-axis to right hand direction.
//
// Parameters:
//   tr
//     a helm3
//
// Return:
//   a number, angle in radians
//
module.exports = function (tr) {
  return Math.atan2(tr.b, tr.a)
}
