const transitTo = require('../path2/transitTo')
const projectTo = require('../point3/projectTo')

module.exports = (path, plane, camera) => {
  // @affineplane.path3.projectTo(path, plane[, camera])
  //
  // Project a 3D path onto a 2D plane orthogonally.
  // Project perspectively if a camera position is given.
  //
  // Parameters:
  //   path
  //     a path3, in the reference basis.
  //   plane
  //     a plane3, in the reference basis.
  //     .. The image plane to which to project.
  //   camera
  //     a point3, in the reference basis. The location of the camera.
  //
  // Return:
  //   a path2 on the image plane.
  //

  // If camera present, project perspectively.
  if (camera) {
    // Implement via point projections.
    return path.map(p => projectTo(p, plane, camera))
  }

  // Orthogonal projection to the target plane.
  // In this case it is equivalent to 2d transitTo.
  // The z dimension is lost.
  return transitTo(path, plane)
}
