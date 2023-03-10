// @affineplane.segment2.transitTo(seg, target)
//
// Represent a segment in the target basis. In other words,
// transit the segment from the reference basis to the target basis.
//
// Parameters:
//   seg
//     a segment2, represented on the reference basis.
//   target
//     a plane2, the target basis, represented
//     .. on the reference basis.
//
// Return:
//   a segment2, represented in the target basis.
//
module.exports = require('../path2/transitTo')
