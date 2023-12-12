module.exports = (box) => {
  // @affineplane.box2.getInnerSquare(box)
  //
  // Get the largest square that fits inside the box and has the same center.
  //
  // Parameters
  //   box
  //     a box2, in the reference basis.
  //
  // Return
  //   a box2, in the reference basis.
  //

  if (box.h < box.w) {
    const offset = (box.w - box.h) / 2
    return {
      a: box.a,
      b: box.b,
      x: box.x + offset * box.a, // offset along width
      y: box.y + offset * box.b,
      w: box.h, // square
      h: box.h
    }
  }
  // else box.h >= box.w

  const offset = (box.h - box.w) / 2
  return {
    a: box.a,
    b: box.b,
    x: box.x - offset * box.b, // offset along height; orient. rotated 90 deg
    y: box.y + offset * box.a,
    w: box.w,
    h: box.w // square
  }
}
