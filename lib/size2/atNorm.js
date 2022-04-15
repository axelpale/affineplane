module.exports = (sz, nw, nh) => {
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
