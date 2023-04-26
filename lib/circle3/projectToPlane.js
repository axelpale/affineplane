// @affineplane.circle3.projectToPlane(circle, plane[, camera])
// @affineplane.circle3.projectTo
//
// Project a circle onto a plane in 3D space. The result is a 2D circle.
// If the camera is undefined, project orthogonally.
//
// Parameters:
//   sphere
//     a circle3 in the reference space.
//   plane
//     a plane3 in the reference space. The target plane.
//   camera
//     optional point3 in the reference space.
//     .. The camera position.
//
// Return:
//   a circle2 on the target plane.
//
module.exports = require('../sphere3/projectToPlane')
