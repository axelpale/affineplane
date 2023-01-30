// affineplane.dist3.projectTo(dist, target[, camera])
//
// Project a distance onto a target plane in 3D.
// The distance is assumed to be measured on the reference plane z=0.
// If camera is given, project perspectively.
// Otherwise, project orthogonally.
// Note that when projected perspectively, only the change of scale in
// the perspective projection affects the distance.
//
// Parameters:
//   dist
//     a dist3 in the reference space.
//   target
//     a plane3 in the reference space.
//   camera
//     optional point3 in the reference space.
//
// Return
//   a dist3 on the target plane.
//

// Reuse because same assumptions
module.exports = require('../dist2/projectTo')
