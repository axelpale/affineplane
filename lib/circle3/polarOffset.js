// @affineplane.circle3.polarOffset(circle, distance, theta[, phi])
//
// Offset a circle by the given distance towards the direction given by
// the spherical theta and phi angles.
//
// Parameters:
//   circle
//     a circle3
//   distance
//     a number, the distance from p.
//   theta
//     a number, the angle around z-axis, the azimuthal angle.
//     .. Clockwise rotation, following the right-hand rule.
//   phi
//     optional number, default π/2. The polar angle in radians
//     .. measured from the positive z-axis.
//
// Return
//   a circle3
//
module.exports = require('../sphere3/polarOffset')
