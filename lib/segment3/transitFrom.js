// @affineplane.segment3.transitFrom(seg, source)
//
// Represent a segment in the reference basis. In other words,
// transit the segment from the source basis to the reference basis.
//
// Parameters:
//   seg
//     a segment3, represented in the source basis.
//   source
//     a plane3, the source basis, represented
//     .. in the reference basis.
//
// Return:
//   a segment3, represented in the reference basis.
//
module.exports = require('../path3/transitFrom')
