const transitTo = require('./transitTo')
const dir2FromVector = require('../dir2/fromVector')

module.exports = (dir, plane) => {
  // affineplane.dir3.projectTo(dir, plane)
  //
  // Project a 3D direction onto a 2D plane orthogonally.
  // We cannot project 3D directions perspectively because
  // they have no fixed position and the perspective position
  // depends on the position.
  //
  // Parameters:
  //   dir
  //     a dir3 in the reference space.
  //   plane
  //     a plane3 in the reference space.
  //     .. The image plane.
  //
  // Return:
  //   a dir2 on the image plane.
  //

  // Orthogonal projection to the target plane.
  const d = transitTo(dir, plane)
  // Lose the z dimension.
  // Ensure that the result is a valid dir2 unit vector.
  return dir2FromVector(d, plane)
}
