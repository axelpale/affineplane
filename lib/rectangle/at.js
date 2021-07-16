module.exports = (rect, x, y) => {
  // Take a point on the rect.
  //
  // Parameters
  //   rect
  //     a rectangle
  //   x
  //     horizontal distance from the top-left corner of the rectangle
  //   y
  //     vertical distance from the top-left corner of the rectangle
  //
  // Return
  //   a point
  //
  return {
    x: rect.x + x,
    y: rect.y + y
  }
}
