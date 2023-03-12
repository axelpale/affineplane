const collide2 = require('../box2/collide')

module.exports = function (b, bb) {
  // @affineplane.box3.collide(b, bb)
  //
  // Test if the two boxes collide.
  // The boxes collide when the intersection of their solid cuboids
  // is not empty.
  //
  // Parameters:
  //   b
  //     a box3, in the reference basis
  //   bb
  //     a box3, in the reference basis
  //
  // Return:
  //   a boolean, true if boxes collide.
  //

  // The box3 can rotate only around z. Therefore we check z-collision first
  // and then proceed to more throughout 2D collision check.

  // Build ranges
  const bmin = b.z
  const bmax = b.z + b.d
  const bbmin = bb.z
  const bbmax = bb.z + bb.d

  // Range collision check.
  if ((bmin >= bbmin && bmin <= bbmax) ||
      (bmax >= bbmin && bmax <= bbmax) ||
      (bmin <= bbmin && bmax >= bbmin) ||
      (bmin <= bbmax && bmax >= bbmax)) {
    // assert: one of the range ends is in the other
    return collide2(b, bb)
  }
  // Else the boxes cannot hit regardless the position and orientation.
  return false
}
