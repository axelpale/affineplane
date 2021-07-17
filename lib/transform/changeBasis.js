
const multiply = require('./multiply')
const inverse = require('./inverse')

module.exports = (tr, sourceBasis, targetBasis) => {
  // Convert formation between bases.
  //
  // Parameters
  //   tr
  //     a ABXY, a transform on the source basis.
  //   sourceBasis
  //     a ABXY, a transition from the source basis to
  //     the reference basis.
  //   targetBasis
  //     a ABXY, a transition from the target basis to
  //     the reference basis.
  //
  // Return
  //   a ABXY, the given transform represented in the targer basis.
  //
  const inv = inverse(targetBasis)
  return multiply(multiply(inv, sourceBasis), tr)
}
