// affineplane.plane2.invert(plane)
//
// A plane is a mapping from the plane's coordinates onto
// the reference plane. The inversion of the plane switches
// the roles so that the result is the reference plane,
// represented in the coordinates of the given plane.
//
// Parameters:
//   plane
//     a plane2, the plane to invert represented
//     .. on the reference plane.
//
// Return:
//   a plane2, the reference plane represented on the given plane.
//
module.exports = require('../helm2/inverse')
