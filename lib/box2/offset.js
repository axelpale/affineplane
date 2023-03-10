module.exports = (box, dx, dy) => {
  // @affineplane.box2.offset(box, dx, dy)
  //
  // Move the box horizontally and vertically.
  //
  // Parameters:
  //   box
  //     a box2
  //   dx
  //     a number
  //   dy
  //     a number
  //
  // Return
  //   a box2
  //
  return {
    a: box.a,
    b: box.b,
    x: box.x + dx,
    y: box.y + dy,
    w: box.w,
    h: box.h
  }
}
