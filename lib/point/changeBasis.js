const inverse = require('../transform/inverse')
const multiply = require('../transform/multiply')
const transformPoint = require('./transform')

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
  const inv = inverse(targetBasis)
  const rel = multiply(inv, sourceBasis)
  return transformPoint(p, rel)
}
