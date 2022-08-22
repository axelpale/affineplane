const scaleBy = require('./scaleBy')
const transitTo = require('./transitTo')

module.exports = (v, plane, camera) => {
  // affineplane.vec2.projectToPlane(v, plane, camera)
  //
  // Project a vector onto another plane.
  // If camera is given, project perspectively.
  // Otherwise, project orthogonally.
  //
  // Parameters:
  //   v
  //     a vec2 in the reference space, z=0.
  //   plane
  //     a plane3 in the reference space.
  //     The projection plane.
  //   camera
  //     optional point3 in the reference space.
  //
  // Return
  //   a vec2 on the projection plane.
  //

  // If camera is present, we first scale the vector.
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
    v = scaleBy(v, ratio)
  }

  // Then we orthogonally project to the target plane.
  // In case of 2D vector, this is equivalent to transit.
  return transitTo(v, plane)
}
