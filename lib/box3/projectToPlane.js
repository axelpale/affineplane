const transitTo = require('../box2/transitTo')
const homothety = require('../box2/homothety')

module.exports = (box, target, camera) => {
  // @affineplane.box3.projectToPlane(box, target[, camera])
  // @affineplane.box3.projectTo
  //
  // Project a 3D box onto a target plane.
  // If a camera is given, project perspectively.
  // Otherwise, project orthogonally along z axis.
  // The resulting box is in 2D.
  //
  // We only project the front face of the 3D box.
  // This is because if we projected a full 3D box perspectively,
  // we would get a lattice mesh in which we are not currently interested.
  // To scale the box towards camera, see affineplane.box3.homothety.
  //
  // Parameters:
  //   box
  //     a box3 in the reference basis.
  //   target
  //     a plane3 in the reference basis.
  //   camera
  //     optional point3 in the reference space.
  //     .. The camera position.
  //
  // Return
  //   a box2 on the target plane.
  //

  if (camera) {
    // Scaling ratio.
    let ratio
    // Distances to camera
    const boxDist = camera.z - box.z
    const targetDist = camera.z - target.z
    // If camera is at the box depth,
    // the ratio would become infinite.
    if (boxDist === 0) {
      ratio = 0 // instead of infinite
    } else {
      ratio = targetDist / boxDist
    }
    // For perspective effect,
    // perform a relative move towards vanishing point.
    // Note this makes the box 2D.
    box = homothety(box, camera, ratio)
  }

  // Othogonal projection to the target plane.
  // This makes the box 2D.
  return transitTo(box, target)
}
