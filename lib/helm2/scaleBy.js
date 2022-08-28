const EPSILON = require('../epsilon')

module.exports = function (tr, multiplier) {
  // affineplane.helm2.scaleBy(tr, multiplier)
  //
  // Scale image of the transform by the given multiplier.
  // Dilation and translation are multiplied,
  // rotation and translation direction are preserved.
  //
  // Parameter
  //   tr
  //     a helm2, a transform on the reference plane.
  //   multiplier
  //     a number
  //
  // Return
  //   a helm2, a transform
  //
  const m = multiplier // alias

  if (m < EPSILON) {
    const msg = 'Expected positive scale factor but saw zero or negative: '
    throw new Error(msg + m)
  }

  return {
    a: m * tr.a,
    b: m * tr.b,
    x: m * tr.x,
    y: m * tr.y
  }
}
