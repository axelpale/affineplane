// @affineplane.plane2.limitScale(plane, min, max)
//
// Limit the scale the plane transformation between
// min and max (inclusive).
//
// Parameters:
//   plane
//     a plane2, in the reference basis.
//   min
//     a number, the minimum scale measured in the reference basis.
//     .. Must be positive.
//   max
//     a number, the maximum scale measured in the reference basis.
//     .. Must be positive.
//
// Return:
//   a plane2
//
module.exports = require('../helm2/limitDilation')
