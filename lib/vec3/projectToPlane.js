const transitTo = require('../vec2/transitTo')
const projectPoint = require('../point3/projectToPlane')
const translatePoint = require('../point3/translate')
const pointDiff = require('../point2/difference')

module.exports = (vec, plane, position, camera) => {
  // @affineplane.vec3.projectToPlane(vec, plane[, position, camera])
  // @affineplane.vec3.projectTo
  //
  // Project a 3D vector onto a 2D plane orthogonally.
  // If a vector position and a camera positions are given,
  // project the vector perspectively. Think of the vector as a displacement
  // that acts at the given position. The resulting 2D vector is
  // the component of that displacement parallel with the plane which
  // would produce visually same movement.
  //
  // Parameters:
  //   vec
  //     a vec3, in the reference basis.
  //   plane
  //     a plane3, in the reference basis.
  //     .. The image plane to which to project.
  //   position
  //     optional point3, the vector position in the reference basis.
  //     .. The vector itself has only direction and magnitude, no position,
  //     .. and the perspective projection requires a position.
  //     .. If left undefined, will project orthogonally.
  //   camera
  //     optional point3, the camera position in the reference basis.
  //     .. If left undefined, will project orthogonally.
  //
  // Return:
  //   a vec2 on the image plane.
  //

  if (position && camera) {
    // Project perspectively.

    // An alternative way to solve this is through vector algebra
    // which find the component of the vector on xy plane.
    // That way possibly produces a bit less fn calls.
    // See note 2023-02-21-14 for math and the previous commits for code.

    // Just do perspective point3 projection from the beginning
    // and end of the vector. Simple.
    const positionOnPlane = projectPoint(position, plane, camera)
    const tip = translatePoint(position, vec)
    const tipOnPlane = projectPoint(tip, plane, camera)
    const vhat = pointDiff(positionOnPlane, tipOnPlane)
    return vhat
  }

  // Orthogonal projection.
  // Just lose the z dimension and transit to plane.
  return transitTo(vec, plane)
}
