const compose = require('./compose')
const inverse = require('./inverse')

module.exports = (sourceProj, targetProj) => {
  // affineplane.proj2.between(source, target)
  //
  // Finds a projection from a source plane A to a target plane B
  // from their projections to a intermediate root plane R.
  // The result is a combination of the inverse of the target projection
  // and the source projection.
  //
  // Parameters:
  //   source
  //     a proj2, a projection from the source plane A to a root plane R
  //   target
  //     a proj2, a projection from the target plane B to a root plane R
  //
  // Return
  //   a proj2
  //

  // TODO open the functions if projection between is used a lot.
  const invProj = inverse(targetProj)
  return compose(invProj, sourceProj)
}
