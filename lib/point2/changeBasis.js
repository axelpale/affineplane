const proj2 = require('../proj2')

module.exports = (p, sourceBasis, targetBasis) => {
  // Convert a point between bases.
  //
  // Parameters
  //   p
  //     point2, a point on the source basis.
  //   sourceBasis
  //     proj2, a transition from the source basis to
  //     the reference basis.
  //   targetBasis
  //     proj2, a transition from the target basis to
  //     the reference basis.
  //
  // Return
  //   point2, the same point but represented on the targer basis.
  //
  const pr = proj2.between(sourceBasis, targetBasis)
  return proj2.point2(pr, p)
}
