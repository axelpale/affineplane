// affineplane.plane3.limitScale(plane, min, max)
//
// Limit the scale the plane transformation between
// min and max (inclusive).
//
// Parameters:
//   plane
//     a plane3, in the reference basis.
//   min
//     a number, the minimum scale measured in the reference basis.
//     .. Must be positive.
//   max
//     a number, the maximum scale measured in the reference basis.
//     .. Must be positive.
//
// Return:
//   a plane3
//
module.exports = require('../helm3/limitDilation')
