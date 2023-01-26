module.exports = (box) => {
  // affineplane.box2.getPlane(box)
  //
  // Get the inner basis of the box as a plane.
  // The scale of the resulting plane is always 1.
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
