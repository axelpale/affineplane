const transitTo = require('./transitTo')

module.exports = (box, target) => {
  // affineplane.box3.projectTo(box, target)
  //
  // Project a 3D box onto a target plane orthogonally along z axis.
  // The resulting box is in 2D.
  //
  // Parameters:
  //   box
  //     a box3 in the reference basis.
  //   target
  //     a plane3 in the reference basis.
  //
  // Return
  //   a box2 on the target plane.
  //

  // We first represent the box in the target basis.
  const box2d = transitTo(box, target)
  // Then drop z dimension.
  delete box2d.z
  delete box2d.d

  // TODO use box2.transitTo to drop z dimension implicitly.

  return box2d
}
