// @affineplane.circle3.offset(c, dx, dy[, dz])
//
// Offset a circle by scalars dx, dy, dz.
// See affineplane.circle3.translate to offset by a vector.
//
// Parameters:
//   c
//     a circle3
//   dx
//     a number, an offset along x-axis.
//   dy
//     a number, an offset along y-axis.
//   dz
//     optional number. The offset along z-axis, default is 0.
//
// Return
//   a circle3, translated
//
module.exports = require('../sphere3/offset')
