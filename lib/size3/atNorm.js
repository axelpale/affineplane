module.exports = (sz, nw, nh, nd) => {
  // @affineplane.size3.atNorm(sz, nw, nh, nd)
  //
  // Find a point in the volume.
  //
  // Parameters
  //   sz
  //     a size3
  //   nw
  //     a normalized width in 0..1
  //   nh
  //     a normalized height
  //   nd
  //     a normalized depth
  //
  // Return
  //   a point3
  //
  return {
    x: sz.w * nw,
    y: sz.h * nh,
    z: sz.d * nd
  }
}
