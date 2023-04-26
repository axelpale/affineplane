// @affineplane.segment3.transitTo(seg, target)
//
// Represent a segment in the target basis. In other words,
// transit the segment from the reference basis to the target basis.
//
// Parameters:
//   seg
//     a segment3, represented in the reference basis.
//   target
//     a plane3, the target basis, represented
//     .. in the reference basis.
//
// Return:
//   a segment3, represented in the target basis.
//
module.exports = require('../path3/transitTo')
