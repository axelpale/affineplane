// affineplane.plane2.scaleTo(plane, center, scale)
//
// Create a plane that has the given scale.
// This is achieved by scaling the plane around
// a center point so that afterwards the plane scale
// becomes the desired scale.
//
// Parameters:
//   plane
//     a plane2 on the reference plane
//   center
//     a point2 on the reference plane
//   scale
//     a number, the scaling factor
//
// Return:
//   a plane2, a scaled plane
//
module.exports = require('../helm2/scaleTo')
