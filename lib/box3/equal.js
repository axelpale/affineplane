module.exports = function (b, bb) {
  // @affineplane.box3.equal(b, bb)
  //
  // Test if two boxes are strictly equal in orientation, position, and size.
  // Boxes are allowed to have additional non-equal properties.
  //
  // Parameters:
  //   b
  //     a box3
  //   bb
  //     a box3
  //
  // Return:
  //   a boolean
  //
  return (
    b.a === bb.a &&
    b.b === bb.b &&
    b.x === bb.x &&
    b.y === bb.y &&
    b.z === bb.z &&
    b.w === bb.w &&
    b.h === bb.h &&
    b.d === bb.d
  )
}
