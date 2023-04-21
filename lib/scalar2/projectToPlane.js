const transitTo = require('./transitTo')

module.exports = (scalar, plane, camera) => {
  // @affineplane.scalar2.projectToPlane(scalar, plane[, camera])
  //
  // Project a second-order scalar (e.g. area) onto another plane in 3D.
  // If camera is given, project perspectively.
  // Otherwise, project orthogonally.
  //
  // Parameters:
  //   scalar
  //     a scalar2 on the z=0 plane of the reference space.
  //   plane
  //     a plane3 relative to the reference space.
  //   camera
  //     optional point3 in the reference space.
  //
  // Return
  //   a scalar2, projected on the target plane,
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

    // Second order scaling example: when the sides of the square are
    // tripled, the area grows 3x3=9 times.
    const scaledScalar = scalar * ratio * ratio

    return transitTo(scaledScalar, plane)
  }

  // Orthogonal projection. Only the plane scale affects.
  return transitTo(scalar, plane)
}
