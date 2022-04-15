module.exports = (rect, rx, ry) => {
  // Take a point on the rect, represented on the rects outer basis.
  //
  // Parameters
  //   rect
  //     a rectangle
  //   rx
  //     horizontal distance from the top-left corner of the rectangle
  //     represented on the rects inner basis
  //   ry
  //     vertical distance from the top-left corner of the rectangle
  //     represented on the rects inner basis
  //
  // Return
  //   a point on the outer basis
  //
  return {
    x: rect.a * rx - rect.b * ry + rect.x,
    y: rect.b * rx + rect.a + ry + rect.y
  }
}
