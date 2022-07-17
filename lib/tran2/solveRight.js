const inverse = require('./inverse')
const compose = require('./compose')

module.exports = (ta, tc) => {
  // affineplane.tran2.solveRight(ta, tc)
  //
  // Given the transforms A and C, find the transform B, where A * B = C.
  // Given that A is invertible, then B = iA * C.
  //
  // Parameters:
  //   ta
  //     a tran2
  //   tc
  //     a tran2
  //
  // Return
  //   a tran2, a transform
  //
  const inv = inverse(ta)
  return compose(inv, tc)
}
