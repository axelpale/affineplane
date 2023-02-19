module.exports = (box) => {
  // @affineplane.box2.getBasis(box)
  //
  // Get the inner basis of the box. In other words, represent the box inner
  // basis as a plane in the reference basis.
  // The scale of the resulting basis is always 1.
  // See also affineplane.box2.getBasisInverse.
  //
  // Parameters:
  //   box
  //     a box2 in the reference basis.
  //
  // Return
  //   a plane2 in the reference basis.
  //
  return {
    a: box.a,
    b: box.b,
    x: box.x,
    y: box.y
  }
}
