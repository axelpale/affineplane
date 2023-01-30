module.exports = (box) => {
  // affineplane.box3.getBasis(box)
  //
  // Get the inner basis of the box.
  // The scale of the resulting basis is always 1.
  //
  // Parameters:
  //   box
  //     a box3 in the reference basis.
  //
  // Return
  //   a plane3 in the reference basis.
  //
  return {
    a: box.a,
    b: box.b,
    x: box.x,
    y: box.y,
    z: box.z
  }
}
