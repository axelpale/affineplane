const inverse = require('./inverse')
const compose = require('./compose')

module.exports = (tb, tc) => {
  // Given transforms B, C, find transform A, where AB = C.
  // Given that B is invertible, then A = C * iB.
  //
  // Parameters:
  //   tb
  //     a tran2
  //   tc
  //     a tran2
  //
  // Return
  //   a tran2, a transform
  //
  const inv = inverse(tb)
  return compose(tc, inv)
}
