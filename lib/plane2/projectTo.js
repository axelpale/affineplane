const scaleBy = require('./scaleBy')
const transitTo = require('./transitTo')

module.exports = (plane, target, camera) => {
  // affineplane.plane2.projectTo(plane, target[, camera])
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

  if (camera) {
    // Find scaling ratio.
    let ratio
    // Distances to camera.
    const distToPlane = camera.z // plane at reference depth z=0
    const distToTarget = camera.z - target.z
    // If camera is at the tr depth,
    // the ratio would become infinite.
    if (distToPlane === 0) {
      // Becomes singular
      // TODO throw error instead singular?
      plane = { a: 0, b: 0, x: camera.x, y: camera.y }
    } else {
      ratio = distToTarget / distToPlane
      // Treat camera as 2d point projected onto the reference plane.
      plane = scaleBy(plane, camera, ratio)
    }
  }

  // Project orthogonally onto the target plane.
  return transitTo(plane, target)
}
