const rotate = require('../point2/rotateBy')

module.exports = function (sp, origin, radians) {
  // @affineplane.sphere2.rotateBy(sp, origin, radians)
  //
  // Rotate a sphere about an origin point.
  //
  // Parameters
  //   sp
  //     a sphere2
  //   origin
  //     a point2, the point around to rotate
  //   radians
  //     a number, angle in radians
  //
  // Return
  //   a sphere2, the rotated sphere
  //

  // Reuse point rotation
  const pole = rotate(sp, origin, radians)
  // Patch radius
  pole.r = sp.r

  return pole
}
