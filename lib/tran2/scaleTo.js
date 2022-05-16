const scaleBy = require('./scaleBy')
const EPSILON = require('../epsilon')

module.exports = function (tr, center, scale) {
  // Scale the given transform so that
  // 1) its scale becomes equal with the given scale, and
  // 2) its image stays fixed at the given center point.
  //
  // Parameter
  //   tr
  //     a tran2
  //   center
  //     a point2, a point on the image of the transform
  //   scale
  //     a number, target scale
  //
  // Return
  //   a tran2, a transform
  //
  // Throws if the given transform is singular, thus cannot be
  // uniquely scaled to the desired scale.
  //

  // Original scale
  const orig = Math.sqrt(tr.a * tr.a + tr.b * tr.b)
  // Prevent divided by zero
  if (orig < EPSILON) {
    throw new Error('Cannot scale singular transformation')
  }
  // orig * m = scale <=> m = scale / orig
  return scaleBy(tr, center, scale / orig)
}
