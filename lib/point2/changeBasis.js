const proj2 = require('../proj2')

module.exports = (p, sourceBasis, targetBasis) => {
  // Convert a point between bases.
  //
  // Parameters
  //   p
  //     a point on the source basis.
  //   sourceBasis
  //     a ABXY, a transition from the source basis to
  //     the reference basis.
  //   targetBasis
  //     a ABXY, a transition from the target basis to
  //     the reference basis.
  //
  // Return
  //   the same point but represented on the targer basis.
  //
  const pr = proj2.between(sourceBasis, targetBasis)
  return proj2.point2(pr, p)
}
