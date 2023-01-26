module.exports = (box) => {
  // affineplane.box2.getAngle(box)
  //
  // Compute box angle in radians with respect to the reference basis.
  //
  // Parameters
  //   box
  //     a box2, in the reference basis.
  //
  // Return
  //   a number, the angle in radians.
  //
  return Math.atan2(box.b, box.a)
}
