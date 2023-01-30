module.exports = (sz, nw, nh) => {
  // @affineplane.size2.atNorm(sz, nw, nh)
  //
  // Find a point on the area.
  //
  // Parameters
  //   sz
  //     a size2
  //   nw
  //     a normalized width in 0..1
  //   nh
  //     a normalized height
  //
  // Return
  //   a point2
  //
  return {
    x: sz.w * nw,
    y: sz.h * nh
  }
}
