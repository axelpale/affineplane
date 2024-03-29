const scaleBy = require('../plane2/scaleBy')
const transitTo = require('../plane2/transitTo')

module.exports = (plane, target, camera) => {
  // @affineplane.plane3.projectToPlane(plane, target[, camera])
  // @affineplane.plane3.projectTo
  //
  // Project the plane based on the image plane position
  // and the optional camera position.
  // If camera is given, project perspectively, otherwise orthogonally.
  //
  // Parameters:
  //   plane
  //     a plane3 in the reference space.
  //   target
  //     a plane3 in the reference space. The image plane to which to project.
  //   camera
  //     optional point3 in the reference space.
  //
  // Return:
  //   a plane2 on the image plane.
  //

  if (camera) {
    // Find scaling ratio.
    let ratio
    // Distance from camera to the plane
    // Distances from camera to the target.
    const distToPlane = camera.z - plane.z
    const distToTarget = camera.z - target.z
    // If camera is at the plane depth,
    // the ratio would become infinite.
    if (distToPlane === 0) {
      // Becomes singular.
      // TODO throw error instead singular?
      plane = { a: 0, b: 0, x: camera.x, y: camera.y }
    } else {
      if (distToTarget === 0) {
        // Camera on the target. Projection would have infinite size.
        // Becomes singular.
        // TODO throw error instead singular?
        plane = { a: 0, b: 0, x: camera.x, y: camera.y }
      } else {
        // Scaling ratio
        ratio = distToTarget / distToPlane

        // Treat camera as 2d point projected onto the reference plane.
        // Treat plane as plane2 orthogonally projected onto the reference plane.
        plane = scaleBy(plane, camera, ratio)
      }
    }
  }

  // Project orthogonally onto the target plane.
  // Becomes plane2.
  return transitTo(plane, target)
}
