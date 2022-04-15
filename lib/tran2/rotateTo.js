const rotateBy = require('./rotateBy')

module.exports = function (tr, center, radians) {
  // Rotate image of the transform to the given angle
  // so that the given center point stays fixed.
  //
  // Parameter
  //   tr
  //     a tran2, a transform
  //   center
  //     a point2, a point
  //   radians
  //     a number, angle to rotate to
  //
  // Return
  //   a tran2, a transform
  //

  // Find difference between current angle and the given angle
  const r = Math.atan2(tr.b, tr.a)
  return rotateBy(tr, center, radians - r)
}
