module.exports = (sz, multiplier) => {
  // affineplane.size2.scaleBy(sz, multiplier)
  //
  // Scale and preserve aspect ratio. Multiplies all dimensions uniformly.
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
    w: Math.abs(sz.w * multiplier),
    h: Math.abs(sz.h * multiplier)
  }
}
