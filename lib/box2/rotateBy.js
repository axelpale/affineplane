const rotatePlaneBy = require('../plane2/rotateBy')

module.exports = (box, origin, radians) => {
  // @affineplane.box2.rotateBy(box, origin, radians)
  //
  // Rotate the box around an origin point by an angle in radians.
  //
  // Parameters:
  //   box
  //     a box2, in the reference basis
  //   origin
  //     a point2 in the reference basis.
  //   radians
  //     a number, rotation angle in radians.
  //
  // Return
  //   a box2
  //

  const b = rotatePlaneBy(box, origin, radians)

  // Patch size
  b.w = box.w
  b.h = box.h

  return b
}
