module.exports = (box) => {
  // affineplane.box2.getScale(box)
  //
  // Get scale of box. Two units in the box basis equals one unit
  // in the reference basis, then the scale of box is 0.5.
  //
  // Parameters:
  //   box
  //     a box2
  //
  // Return
  //   a number
  //
  return Math.sqrt(box.a * box.a + box.b * box.b)
}
