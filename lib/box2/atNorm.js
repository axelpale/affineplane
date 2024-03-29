const at = require('./at')

module.exports = (box, nw, nh) => {
  // @affineplane.box2.atNorm(box, nw, nh)
  //
  // Take a point on the box at the normalized coordinates.
  //
  // Parameters
  //   box
  //     a box2
  //   nw
  //     a number, a normalized coordinate along width 0..1
  //   nh
  //     a number, a normalized coordinate along height 0..1
  //
  // Return
  //   a point2 in the reference basis.
  //

  // Note that box width and height are in
  // the referense basis, not in the box basis.
  // In other words, if box would have a scale of 2 and a width of 3,
  // then the width in the box basis is 1.5.
  // However box scale is always 1.

  const rx = box.w * nw
  const ry = box.h * nh
  return at(box, rx, ry)
}
