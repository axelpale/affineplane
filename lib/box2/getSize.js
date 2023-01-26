module.exports = (box) => {
  // affineplane.box2.getSize(box)
  //
  // Get the size of the box.
  //
  // Parameters:
  //   box
  //     a box2 in the reference basis.
  //
  // Return
  //   a size2 in the reference basis.
  //
  return {
    w: box.w,
    h: box.h
  }
}
