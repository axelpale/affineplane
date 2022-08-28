// affineplane.plane2.transitTo
//
const invert = require('./invert')
const transitFrom = require('./transitFrom')

module.exports = (plane, target) => {
  // Transit a plane2 to a target plane.
  // In other words, represent the plane2
  // in the coordinate system of the target plane.
  //
  // Parameters:
  //   plane
  //     a plane2 on the reference plane.
  //   target
  //     a plane2, the target plane, represented
  //     .. on the reference plane.
  //
  // Return:
  //   a plane2, represented on the target plane.
  //

  // The plane is a mapping from itself to a target plane.
  // We need the projection from the target to the plane.
  const itarget = invert(target)
  return transitFrom(plane, itarget)
}
