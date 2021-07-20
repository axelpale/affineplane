module.exports = (tb, tc) => {
  // Given transforms B, C, find transform A, where AB = C.
  //
  // Return
  //   a transform
  //
  const inv = inverse(tb)
  return multiply(tr, inv)
}
