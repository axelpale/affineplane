const proj2 = require('../proj2')

module.exports = (d, sourceBasis, targetBasis) => {
  // Convert a distance between bases.
  //
  // Parameters
  //   d
  //     a number, a measure on the source basis.
  //   sourceBasis
  //     a proj2, a transition from the source basis to
  //     ..the reference basis.
  //   targetBasis
  //     a proj2, a transition from the target basis to
  //     ..the reference basis.
  //
  // Return
  //   a number, the scalar on the target basis.
  //
  const pr = proj2.between(sourceBasis, targetBasis)
  return proj2.dist2(pr, d)
}
