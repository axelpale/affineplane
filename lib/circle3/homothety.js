// @affineplane.circle3.homothety(circle, origin, ratio)
// @affineplane.circle3.scaleBy
//
// Perform homothety for the circle about a pivot.
// In other words, scale the circle by the given ratio,
// so that the origin point stays fixed.
//
// Parameters:
//   circle
//     a circle3
//   origin
//     a point3, the transform origin, the pivot point
//   ratio
//     a number, the scaling ratio
//
// Return:
//   a circle3
//
module.exports = require('../sphere3/homothety')
