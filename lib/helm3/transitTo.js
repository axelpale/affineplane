const invert = require('../helm3/invert')
const transitFrom = require('./transitFrom')

module.exports = (tr, target) => {
  // @affineplane.helm3.transitTo(tr, target)
  //
  // Transit a helm3 to a target plane.
  // In other words, represent the helm3
  // in the coordinate system of the plane.
  //
  // Parameters:
  //   tr
  //     a helm3 transformation represented on the reference plane.
  //   target
  //     a plane3, the target plane, represented
  //     .. on the reference plane.
  //
  // Return:
  //   a helm3, represented on the target plane.
  //

  // The plane is a mapping from itself to a target plane.
  // We need the projection from the target to the plane.
  const itarget = invert(target)
  return transitFrom(tr, itarget)
}
