const inverse = require('./inverse')
const compose = require('./compose')

module.exports = (tb, tc) => {
  // Given transforms B, C, find transform A, where AB = C.
  // Given that B is invertible, then A = C * iB.
  //
  // Parameters:
  //   tb
  //     tran2
  //   tc
  //     tran2
  //
  // Return
  //   tran2, a transform
  //
  const inv = inverse(tb)
  return compose(tc, inv)
}
