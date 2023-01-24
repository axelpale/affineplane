module.exports = (sz) => {
  // affineplane.size3.volume(sz)
  //
  // Volume. If your w, h, and d are in pixels, this gives you
  // the total number of voxels.
  //
  // Parameters
  //   sz
  //     a size3
  //
  // Return
  //   a number
  //
  return sz.w * sz.h * sz.d
}
