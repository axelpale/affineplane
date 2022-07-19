const proj2 = require('../proj2')

module.exports = (tr, sourceBasis, targetBasis) => {
  // affineplane.helm2.changeBasis(tr, sourceBasis, targetBasis)
  // affineplane.helm2.rebase
  //
  // Convert transformation from a basis to another.
  //
  // Parameters
  //   tr
  //     a tran2, a transform on the source basis.
  //   sourceBasis
  //     a proj2, a transition from the source basis to
  //     the reference basis.
  //   targetBasis
  //     a proj2, a transition from the target basis to
  //     the reference basis.
  //
  // Return
  //   a tran2, the given transform represented in the target basis.
  //
  const pr = proj2.between(sourceBasis, targetBasis)
  return proj2.tran2(pr, tr)
}
