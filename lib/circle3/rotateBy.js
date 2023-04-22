// @affineplane.circle3.rotateBy(c, origin, radians)
//
// Rotate a circle about a line parallel to z-axis that goes through
// the given origin point. The rotation direction follows the right hand rule
// about the positive z-axis.
//
// Parameters
//   c
//     a circle3
//   origin
//     a point3, the point that defines the line around which to rotate
//   radians
//     a number, angle in radians
//
// Return
//   a circle3, the rotated circle
//
module.exports = require('../sphere3/rotateBy')
