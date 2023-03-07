const invert = require('../plane3/invert')
const transitFrom = require('./transitFrom')

module.exports = (sphere, target) => {
  // @affineplane.sphere3.transitTo(sphere, target)
  //
  // Transit a sphere3 to a target plane.
  // In other words, represent the sphere
  // in the coordinate system of the target plane.
  //
  // Parameters:
  //   sphere
  //     a sphere3 on the reference plane.
  //   target
  //     a plane3, the target plane, represented
  //     .. on the reference plane.
  //
  // Return:
  //   a sphere3, represented on the target plane.
  //

  // The plane is a mapping from itself to a target plane.
  // We need the projection from the target to the plane.
  const itarget = invert(target)
  return transitFrom(sphere, itarget)
}
