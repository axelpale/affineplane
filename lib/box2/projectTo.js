const transitTo = require('./transitTo')
const homothety = require('./homothety')

module.exports = (box, target, camera) => {
  // affineplane.box2.projectTo(box, target[, camera])
  //
  // Project a box onto a target plane in 3d.
  // If a camera is given, project perspectively.
  // Otherwise, project orthogonally.
  //
  // Parameters:
  //   box
  //     a box2 in the reference basis, assume z=0.
  //   target
  //     a plane3 in the reference basis.
  //   camera
  //     optional point3 in the reference basis.
  //
  // Return
  //   a box2 on the target plane.
  //

  // If camera is present, we first move the box
  // towards vanishing point.
  if (camera) {
    // Scaling ratio.
    let ratio
    // If camera is at the reference depth,
    // the ratio would become infinite.
    if (camera.z === 0) {
      ratio = 0 // instead of infinite
    } else {
      ratio = (camera.z - target.z) / camera.z
    }
    // Perform relative move towards vanishing point.
    box = homothety(box, camera, ratio)
  }

  // Then we orthogonally project the box to the target plane.
  // In case of missing camera, this is equivalent to transit.
  return transitTo(box, target)
}
