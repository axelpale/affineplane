// affineplane.plane3.scaleTo(plane, center, scale)
//
// Scale a plane to the given scale towards the center point.
//
// Parameters:
//   plane
//     a plane3 on the reference plane
//   center
//     a point3 on the reference plane
//   scale
//     a number, the desired scale
//
// Return:
//   a plane3, a scaled plane
//
const scaleBy = require('./scaleBy')
const EPSILON = require('../epsilon')

module.exports = function (plane, center, scale) {
  // Original scale
  const orig = Math.sqrt(plane.a * plane.a + plane.b * plane.b)

  // Prevent division by zero
  if (orig < EPSILON) {
    throw new Error('Cannot scale singular transformation')
  }

  // orig * m = scale <=> m = scale / orig
  return scaleBy(plane, center, scale / orig)
}
