const rotate = require('../point3/rotateBy')

module.exports = function (sp, origin, radians) {
  // @affineplane.sphere3.rotateBy(sp, origin, radians)
  //
  // Rotate a sphere about a line parallel to z-axis that goes through
  // the origin point. The rotation direction follows the right hand rule
  // about the positive z-axis.
  //
  // Parameters
  //   sp
  //     a sphere3
  //   origin
  //     a point3, the point that defines the line around which to rotate
  //   radians
  //     a number, angle in radians
  //
  // Return
  //   a sphere3, the rotated sphere
  //

  // Reuse point rotation
  const pole = rotate(sp, origin, radians)
  // Patch radius
  pole.r = sp.r

  return pole
}
