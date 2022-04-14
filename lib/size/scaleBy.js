module.exports = (sz, multiplier) => {
  // Ratio-preserving scale. Multiplies all dimensions.
  //
  return {
    w: sz.w * multiplier,
    h: sz.h * multiplier
  }
}
