module.exports = (tb, tc) => {
  // Given transforms B, C, find transform A, where AB = C.
  // Given that B is invertible, then A = C * iB.
  //
  // Return
  //   a transform
  //
  const inv = inverse(tb)
  return multiply(tr, inv)
}
