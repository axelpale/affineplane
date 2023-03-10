const invert = require('../plane2/invert')
const transitFrom = require('./transitFrom')

module.exports = (sphere, target) => {
  // @affineplane.sphere2.transitTo(sphere, target)
  //
  // Transit a sphere2 to a target plane.
  // In other words, represent the sphere
  // in the coordinate system of the target plane.
  //
  // Parameters:
  //   sphere
  //     a sphere2 on the reference plane.
  //   target
  //     a plane2, the target plane, represented
  //     .. on the reference plane.
  //
  // Return:
  //   a sphere2, represented on the target plane.
  //

  // The plane is a mapping from itself to a target plane.
  // We need the projection from the target to the plane.
  const itarget = invert(target)
  return transitFrom(sphere, itarget)
}
