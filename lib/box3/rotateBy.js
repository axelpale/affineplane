const rotatePlaneBy = require('../plane3/rotateBy')

module.exports = (box, origin, radians) => {
  // @affineplane.box3.rotateBy(box, origin, radians)
  //
  // Rotate the box around an origin point by an angle in radians.
  // Rotation direction is from positive x axis towards positive y axis.
  //
  // Parameters:
  //   box
  //     a box3, in the reference basis
  //   origin
  //     a point3 in the reference basis.
  //   radians
  //     a number, rotation angle in radians.
  //
  // Return
  //   a box3
  //

  const b = rotatePlaneBy(box, origin, radians)

  // Patch size
  b.w = box.w
  b.h = box.h
  b.d = box.d

  return b
}
