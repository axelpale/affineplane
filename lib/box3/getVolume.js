module.exports = (box) => {
  // affineplane.box3.getVolume(box)
  //
  // Compute box volume. This returns the volume as a measure
  // in the reference basis.
  //
  // Parameters
  //   box
  //     a box3, a cuboid in the reference basis.
  //
  // Return
  //   a number, the volume in the reference basis.
  //
  return box.w * box.h * box.d
}
