const at = require('./at')

module.exports = (rect, nw, nh) => {
  // Take a point on the rect.
  //
  // Parameters
  //   rect
  //     a rectangle
  //   nw
  //     normalized width 0..1
  //   nh
  //     normalized height 0..1
  //
  // Return
  //   a point on the rect's outer basis
  //
  return at(rect, rect.w * nw, rect.h * nh)
}
