const proj2 = require('../proj2')

module.exports = (p, sourceBasis, targetBasis) => {
  // affineplane.point2.changeBasis(p, source, target)
  //
  // Convert a point between bases.
  //
  // Parameters
  //   p
  //     a point2, a point on the source basis.
  //   source
  //     a proj2, a transition from the source basis to
  //     ..the reference basis.
  //   target
  //     a proj2, a transition from the target basis to
  //     ..the reference basis.
  //
  // Return
  //   a point2, the same point but represented on the targer basis.
  //
  const pr = proj2.between(sourceBasis, targetBasis)
  return proj2.point2(pr, p)
}
