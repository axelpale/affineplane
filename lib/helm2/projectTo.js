const scaleBy = require('./scaleBy')
const transitTo = require('./transitTo')

module.exports = (tr, plane, camera) => {
  // affineplane.helm2.projectTo(tr, plane[, camera])
  //
  // Project transformation onto a plane.
  // If camera is given perspectively.
  //
  // Parameters:
  //   tr
  //     a helm2 on the reference plane z=0.
  //   plane
  //     a plane3 in the reference space.
  //     .. The projection plane.
  //   camera
  //     optional point3 in the reference space.
  //     .. The camera position.
  //     .. Set for perspective projection.
  //
  // Return
  //   a helm2 on the projection plane.
  //

  if (camera) {
    // Find scaling ratio.
    let ratio
    // Distances to camera.
    const distToTr = camera.z
    const distToPlane = camera.z - plane.z
    // If camera is at the tr depth,
    // the ratio would become infinite.
    if (distToTr === 0) {
      // Becomes singular
      // TODO throw error instead singular?
      tr = { a: 0, b: 0, x: camera.x, y: camera.y }
    } else {
      ratio = distToPlane / distToTr
      // Treat camera as 2d point projected onto the reference plane.
      tr = scaleBy(tr, camera, ratio)
    }
  }

  // Project orthogonally onto the target plane.
  return transitTo(tr, plane)
}
