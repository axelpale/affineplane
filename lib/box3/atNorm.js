const at = require('./at')

module.exports = (box, nw, nh, nd) => {
  // affineplane.box3.atNorm(box, nw, nh, nd)
  //
  // Take a point on the box with coordinates normalized to box sizes.
  //
  // Parameters
  //   box
  //     a box3
  //   nw
  //     a number, a normalized coordinate 0..1 along width
  //   nh
  //     a number, a normalized coordinate 0..1 along height
  //   nd
  //     a number, a normalized coordinate 0..1 along depth
  //
  // Return
  //   a point3 in the reference basis.
  //

  const rx = box.w * nw
  const ry = box.h * nh
  const rz = box.d * nd
  return at(box, rx, ry, rz)
}
