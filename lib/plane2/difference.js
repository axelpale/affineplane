const compose = require('./compose')
const invert = require('./invert')

module.exports = (source, target) => {
  // affineplane.plane2.difference(source, target)
  // affineplane.plane2.between
  /// alt names: relative, delta
  //
  // Represent a source plane on the target plane.
  // In other words, find a transition from a source plane A
  // to a target plane B from their transitions to
  // an intermediate root plane R.
  //
  // The result is a combination of the inverse of the target plane
  // and the source plane.
  //
  // Parameters:
  //   source
  //     a plane2, the source plane on the reference plane.
  //   target
  //     a plane2, the target plane on the reference plane.
  //
  // Return
  //   a plane2, the source plane on the target plane.
  //

  // OPTIMIZE open the functions if projection between is used a lot.
  const itarget = invert(target)
  return compose(itarget, source)
}
