const transitTo = require('./transitTo')

module.exports = (scalar, plane, camera) => {
  // @affineplane.scalar1.projectToPlane(scalar, plane[, camera])
  //
  // Project a scalar (e.g. distance) onto another plane in 3d.
  // If camera is given, project perspectively.
  // Otherwise, project orthogonally.
  //
  // Parameters:
  //   scalar
  //     a scalar1 on the z=0 plane of the reference space.
  //   plane
  //     a plane3 relative to the reference space.
  //   camera
  //     optional point3 in the reference space.
  //
  // Return
  //   a scalar1, projected on the target plane,
  //   .. and represented in the scale of the target.
  //

  // If camera is present, we first scale the scalar
  // by the amount caused due to perspective.
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

    return transitTo(scalar * ratio, plane)
  }

  // Orthogonal projection. Only the plane scale affects.
  return transitTo(scalar, plane)
}
