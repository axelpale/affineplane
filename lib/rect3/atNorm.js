const at = require('./at')

module.exports = (rect, nw, nh) => {
  // affineplane.rect3.atNorm(rect, nw, nh)
  //
  // Take a point on the rect.
  //
  // Parameters
  //   rect
  //     a rectangle
  //   nw
  //     a number, a normalized coordinate along width 0..1
  //   nh
  //     a number, a normalized coordinate along height 0..1
  //
  // Return
  //   a point3, in the rectangle's outer basis
  //
  return at(rect, rect.size.w * nw, rect.size.h * nh)
}
