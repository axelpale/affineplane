module.exports = (sz, multiplier) => {
  // Ratio-preserving scale. Multiplies all dimensions.
  //
  // Parameters:
  //   sz
  //     size2
  //   multiplier
  //     number
  //
  // Return:
  //   size2
  //
  return {
    w: sz.w * multiplier,
    h: sz.h * multiplier
  }
}
