module.exports = (sz, multiplier) => {
  // Ratio-preserving scale. Multiplies all dimensions uniformly.
  //
  // Parameters:
  //   sz
  //     a size2
  //   multiplier
  //     a number
  //
  // Return:
  //   a size2
  //
  return {
    w: sz.w * multiplier,
    h: sz.h * multiplier
  }
}
