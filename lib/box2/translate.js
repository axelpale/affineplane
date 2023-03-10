module.exports = (box, vec) => {
  // @affineplane.box2.translate(box, vec)
  //
  // Move the box horizontally and vertically by a vector.
  // See affineplane.box2.offset to move by scalars.
  //
  // Parameters:
  //   box
  //     a box2
  //   vec
  //     a vec2
  //
  // Return
  //   a box2
  //
  return {
    a: box.a,
    b: box.b,
    x: box.x + vec.x,
    y: box.y + vec.y,
    w: box.w,
    h: box.h
  }
}
