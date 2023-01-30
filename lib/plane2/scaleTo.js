// @affineplane.plane2.scaleTo(plane, center, scale)
//
// Create a plane that has the given scale.
// This is achieved by scaling the plane around
// a center point so that afterwards the plane scale
// becomes the desired scale.
//
// Parameters:
//   plane
//     a plane2 on the reference plane
//   center
//     a point2 on the reference plane
//   scale
//     a number, the desired scale
//
// Return:
//   a plane2, a scaled plane
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
