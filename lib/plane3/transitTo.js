const invert = require('./invert')
const compose = require('../helm3/compose')

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

  // The plane is a mapping from itself to the reference: PR
  // The target is a mapping from itself to the reference: TR
  // To represent plane on the target plane: PT
  // We know that PT = inv(TR)*PR
  // Therefore invert the target:
  const itarget = invert(target)
  // And multiply inv(TR)*PR
  return compose(itarget, plane)
}
