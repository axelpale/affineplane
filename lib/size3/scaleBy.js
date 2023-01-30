module.exports = (sz, multiplier) => {
  // affineplane.size3.scaleBy(sz, multiplier)
  //
  // Scale and preserve aspect ratio. Multiplies all dimensions uniformly.
  //
  // Parameters:
  //   sz
  //     a size3
  //   multiplier
  //     a number
  //
  // Return:
  //   a size3
  //
  return {
    w: Math.abs(sz.w * multiplier),
    h: Math.abs(sz.h * multiplier),
    d: Math.abs(sz.d * multiplier)
  }
}
