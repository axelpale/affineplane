module.exports = (box) => {
  // affineplane.box3.getSize(box)
  //
  // Get the size of the box.
  //
  // Parameters:
  //   box
  //     a box3 in the reference basis.
  //
  // Return
  //   a size3 in the reference basis.
  //
  return {
    w: box.w,
    h: box.h,
    d: box.d
  }
}
