module.exports = (ta, tc) => {
  // Given the transforms A and C, find the transform B, where A * B = C.
  // Given that A is invertible, then B = iA * C.
  //
  // Parameters:
  //   ta
  //     tran2
  //   tc
  //     tran2
  //
  // Return
  //   a transform
  //
  const inv = inverse(ta)
  return multiply(inv, tc)
}
