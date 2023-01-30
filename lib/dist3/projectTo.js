// affineplane.dist3.projectTo(dist, target[, camera])
//
// Project a distance onto a target plane in 3D basis.
// The distance is assumed to be measured
// on the plane z=0 of the reference basis.
// If camera is given, project perspectively.
// Otherwise, project orthogonally.
// Note that when projected perspectively, only the change of scale in
// the perspective projection affects the distance.
//
// Parameters:
//   dist
//     a dist3 in the reference basis.
//   target
//     a plane3 in the reference basis.
//   camera
//     optional point3 in the reference basis.
//
// Return
//   a dist3 on the target plane.
//

// Reuse because same assumptions
module.exports = require('../dist2/projectTo')
