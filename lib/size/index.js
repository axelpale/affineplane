exports.area = (sz) => {
  // Area. If your w and h are in px, this gives you
  // the total number of pixels.
  //
  // Parameters
  //   sz
  //     a size
  //
  // Return
  //   number
  //
  return sz.w * sz.h
}

exports.atNorm = (sz, nw, nh) => {
  // Find points on the area
  //
  // Parameters
  //   sz
  //     a size
  //   nw
  //     a normalized width in 0..1
  //   nh
  //     a normalized height
  //
  return {
    x: sz.w * nw,
    y: sz.h * nh
  }
}

exports.create = (width, height) => {
  return {
    w: width,
    h: height
  }
}

exports.scaleBy = (sz, multiplier) => {
  // Ratio-preserving scale. Multiplies all dimensions.
  //
  return {
    w: sz.w * multiplier,
    h: sz.h * multiplier
  }
}
