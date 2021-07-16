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
  //   a point on rect
  //
  return {
    x: rect.x + rect.w * nw,
    y: rect.y + rect.h * nh
  }
}
