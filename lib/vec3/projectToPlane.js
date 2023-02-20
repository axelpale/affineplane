const transitTo = require('../vec2/transitTo')

module.exports = (vec, plane) => {
  // @affineplane.vec3.projectToPlane(vec, plane)
  // @affineplane.vec3.projectTo
  //
  // Project a 3D vector onto a 2D plane orthogonally.
  // We cannot project 3D vectors perspectively because
  // they have no fixed position and the perspective position
  // depends on the position. See affineplane.line3.projectTo
  // for perspective projection of a vector with fixed position.
  // See affineplane.path3.projectTo for perspective projection of
  // a sequence of points.
  //
  // Parameters:
  //   vec
  //     a vec3, in the reference basis.
  //   plane
  //     a plane3, in the reference basis.
  //     .. The image plane to which to project.
  //
  // Return:
  //   a vec2 on the image plane.
  //

  // Orthogonal projection to the target plane.
  // In this case it is equivalent to 2d transitTo.
  // The z dimension is lost.
  return transitTo(vec, plane)
}