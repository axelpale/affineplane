module.exports = (sz, nw, nh) => {
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
  //   point2
  //
  return {
    x: sz.w * nw,
    y: sz.h * nh
  }
}
