const transitTo = require('./transitTo')

module.exports = (tr, plane, camera) => {
  // @affineplane.helm2.projectTo(tr, plane[, camera])
  //
  // Project transformation onto a plane.
  // If camera is given, project perspectively.
  // Projection does not affect the dilation or rotation property of the tr.
  // Projection only affects the scale of the translation.
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
      // Becomes singular. Infinite translation if any. Keep zero.
      // TODO throw error instead singular?
      tr = {
        a: tr.a,
        b: tr.b,
        x: 0,
        y: 0
      }
    } else {
      ratio = distToPlane / distToTr
      // Treat camera as 2d point projected onto the reference plane.
      tr = {
        a: tr.a,
        b: tr.b,
        x: tr.x * ratio,
        y: tr.y * ratio
      }
    }
  }

  // Project orthogonally onto the target plane.
  return transitTo(tr, plane)
}
