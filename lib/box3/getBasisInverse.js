module.exports = (box) => {
  // @affineplane.box3.getBasisInverse(box)
  //
  // Get the outer basis of the box represented in the box basis.
  // The scale of the resulting basis is always 1.
  // See also affineplane.box3.getBasis.
  //
  // Parameters:
  //   box
  //     a box3 in the reference basis.
  //
  // Return
  //   a plane3 in the box basis. The outer basis.
  //

  return {
    a: box.a,
    b: -box.b,
    x: -box.a * box.x - box.b * box.y,
    y: box.b * box.x - box.a * box.y,
    z: -box.z
  }
}
