const transitTo = require('./transitTo')

module.exports = (dist, target, camera) => {
  // affineplane.dist2.projectTo(dist, target[, camera])
  //
  // Project a distance onto a target plane in 3D.
  // The distance is assumed to be measured on the reference plane z=0.
  // If camera is given, project perspectively.
  // Otherwise, project orthogonally.
  //
  // Parameters:
  //   dist
  //     a dist2 in the reference basis.
  //   target
  //     a plane3 in the reference basis.
  //   camera
  //     optional point3 in the reference basis.
  //
  // Return
  //   a dist2 on the target plane.
  //

  // If a camera is present, we first move the distance
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
    // Perform perspective scaling
    dist = dist * ratio
  }

  // Then we orthogonally transit the distance to the target plane
  // to match the coordinate system.
  return transitTo(dist, target)
}
