const homothety = require('./homothety')
const transitTo = require('../sphere2/transitTo')

module.exports = (sphere, plane, camera) => {
  // @affineplane.sphere3.projectToPlane(sphere, plane[, camera])
  // @affineplane.sphere3.projectTo
  //
  // Project a 3D sphere onto a plane in 3D space. The result is a 2D sphere.
  // If the camera is undefined, project orthogonally.
  //
  // Parameters:
  //   sphere
  //     a sphere3 in the reference space.
  //   plane
  //     a plane3 in the reference space. The target plane.
  //   camera
  //     optional point3 in the reference space.
  //     .. The camera position.
  //
  // Return:
  //   a sphere2 on the target plane.
  //

  if (camera) {
    // Find scaling ratio.
    let ratio
    // Distances to camera.
    const distToSphere = camera.z - sphere.z
    const distToPlane = camera.z - plane.z
    // If camera is at the sphere depth,
    // the ratio would become infinite.
    if (distToSphere === 0) {
      ratio = 0 // instead of infinite
    } else {
      ratio = distToPlane / distToSphere
    }
    // For perspective effect, scale towards camera.
    sphere = homothety(sphere, camera, ratio)
  }

  // Transit to the target plane.
  // This also does orthogonal projection because z dimension is dropped.
  return transitTo(sphere, plane)
}
