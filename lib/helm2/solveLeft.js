const invert = require('./invert')
const compose = require('./compose')

module.exports = (tb, tc) => {
  // affineplane.helm2.solveLeft(tb, tc)
  //
  // Given transforms B, C, find transform A, where AB = C.
  // Given that B is invertible, then A = C * iB.
  //
  // Parameters:
  //   tb
  //     a helm2
  //   tc
  //     a helm2
  //
  // Return
  //   a helm2, a transform
  //
  const inv = invert(tb)
  return compose(tc, inv)
}
