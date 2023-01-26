const invert = require('./invert')
const compose = require('./compose')

module.exports = (ta, tc) => {
  // affineplane.helm2.solveRight(ta, tc)
  //
  // Given the transforms A and C, find the transform B, where A * B = C.
  // Given that A is invertible, then B = iA * C.
  //
  // Parameters:
  //   ta
  //     a helm2
  //   tc
  //     a helm2
  //
  // Return
  //   a helm2, a transform
  //
  const inv = invert(ta)
  return compose(inv, tc)
}
