const homothety = require('./homothety')
const transitTo = require('../point2/transitTo')

module.exports = (point, plane, camera) => {
  // @affineplane.point3.projectTo(point, plane[, camera])
  //
  // Project a 3D point onto a plane in 3D space.
  //
  // Parameters:
  //   point
  //     a point3 in the reference space.
  //   plane
  //     a plane3 in the reference space. The target plane.
  //   camera
  //     optional point3 in the reference space.
  //     .. The camera position.
  //
  // Return:
  //   a point2 on the target plane.
  //

  if (camera) {
    // Find scaling ratio.
    let ratio
    // Distances to camera.
    const distToPoint = camera.z - point.z
    const distToPlane = camera.z - plane.z
    // If camera is at the point depth,
    // the ratio would become infinite.
    if (distToPoint === 0) {
      ratio = 0 // instead of infinite
    } else {
      ratio = distToPlane / distToPoint
    }
    // For perspective effect,
    // perform relative move towards vanishing point.
    const center = {
      x: camera.x,
      y: camera.y,
      z: point.z
    }
    point = homothety(point, center, ratio)
  }

  // Orthogonal projection to the target plane.
  // In this case it is equivalent to 2d transitTo
  return transitTo(point, plane)
}
