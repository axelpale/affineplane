const proj2 = require('../proj2')
const multiply = require('./multiply')
const inverse = require('./inverse')

module.exports = (tr, sourceBasis, targetBasis) => {
  // Convert formation between bases.
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
  //   a tran2, the given transform represented in the targer basis.
  //
  const pr = proj2.between(sourceBasis, targetBasis)
  return proj2.tran2(pr, tr)
}
