const transitTo = require('./transitTo')
const homothety = require('./homothety')

module.exports = (point, plane, camera) => {
  // affineplane.point2.projectTo(point, plane, camera)
  //
  // Project a point onto another plane in 3d.
  // If camera is given, project perspectively.
  // Otherwise, project orthogonally.
  //
  // Parameters:
  //   point
  //     a point2 in the reference space, assume z=0.
  //   plane
  //     a plane3 in the reference space.
  //   camera
  //     optional point3 in the reference space.
  //
  // Return
  //   a point2 on the target plane.
  //

  // If camera is present, we first move the point
  // towards vanishing point.
  if (camera) {
    // Scaling ratio.
    let ratio
    // If camera is at the reference depth,
    // the ratio would become infinite.
    if (camera.z === 0) {
      ratio = 0 // instead of infinite
    } else {
      ratio = (camera.z - plane.z) / camera.z
    }
    // Perform relative move towards vanishing point.
    point = homothety(point, camera, ratio)
  }

  // Then we orthogonally project the point to the target plane.
  // In case of 2D point, this is equivalent to transit.
  return transitTo(point, plane)
}
