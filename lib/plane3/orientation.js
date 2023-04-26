// @affineplane.plane3.orientation(plane)
//
// The orientation of the plane, i.e. the rotation from default.
// If the plane is singular, falls back to the default orientation.
//
// Parameters
//   plane
//     a plane3, in the reference basis
//
// Return
//   a orient2, in the reference basis
//
module.exports = require('../plane2/orientation')
