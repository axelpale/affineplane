const transitTo = require('../helm2/transitTo')

module.exports = (tr, plane) => {
  // affineplane.helm3.projectToPlane(tr, plane)
  //
  // Project transformation onto a plane orthogonally.
  //
  // Parameters:
  //   tr
  //     a helm3 in the reference space.
  //   plane
  //     a plane3 in the reference space.
  //     The image plane.
  //
  // Return
  //   a helm2 on the image plane.
  //

  // Project orthogonally onto the image plane in 2d space.
  // This loses the z dimension.
  return transitTo(tr, plane)
}
