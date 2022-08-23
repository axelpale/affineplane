// affineplane.plane2.projectToPlane(plane, target, camera)
//
// Project a 2D plane from reference to the target parallel 2D plane in 3D.
// If camera is given, project perspectively, otherwise orthogonally.
//
// Parameters:
//   plane
//     a plane2 in the reference space, z=0.
//   target
//     a plane3 in the reference space.
//     .. The image plane to which to project.
//   camera
//     optional point3 in the reference space.
//
// Return:
//   a plane2 on the image plane.
//
module.exports = require('../helm2/projectToPlane')
