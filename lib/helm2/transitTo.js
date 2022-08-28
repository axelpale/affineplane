const inverse = require('../helm2/inverse')
const transitFrom = require('./transitFrom')

module.exports = (tr, target) => {
  // Transit a helm2 to a target plane.
  // In other words, represent the helm2
  // in the coordinate system of the target plane.
  //
  // Parameters:
  //   tr
  //     a helm2 transformation on the reference plane.
  //   target
  //     a plane2, the target plane, represented
  //     .. on the reference plane.
  //
  // Return:
  //   a helm2, represented on the target plane.
  //

  // The plane is a mapping from itself to a target plane.
  // We need the projection from the target to the plane.
  // OPTIMIZE open functions, e.g. plane translation has no effect.
  const itarget = inverse(target)
  return transitFrom(tr, itarget)
}
