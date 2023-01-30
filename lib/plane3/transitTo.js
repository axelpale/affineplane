const invert = require('./invert')
const transitFrom = require('./transitFrom')

module.exports = (plane, target) => {
  // @affineplane.plane3.transitTo(plane, target)
  //
  // Transit a plane3 to a target plane.
  // In other words, represent the plane3
  // in the coordinate system of the target plane.
  //
  // Parameters:
  //   plane
  //     a plane3, represented on the reference plane.
  //   target
  //     a plane3, the target plane, represented
  //     .. on the reference plane.
  //
  // Return:
  //   a plane3, represented on the target plane.
  //

  // The plane is a mapping from itself to a target plane.
  // We need the projection from the target to the plane.
  const itarget = invert(target)
  return transitFrom(plane, itarget)
}
