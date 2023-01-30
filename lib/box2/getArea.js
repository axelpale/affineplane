module.exports = (box) => {
  // @affineplane.box2.getArea(box)
  //
  // Compute box area. This returns the area in the reference basis.
  //
  // Parameters
  //   box
  //     a box2, in the reference basis.
  //
  // Return
  //   a number, the area in the reference basis.
  //
  return box.w * box.h
}
