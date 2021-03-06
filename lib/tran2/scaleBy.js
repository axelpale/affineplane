const EPSILON = require('../epsilon')

module.exports = function (tr, center, multiplier) {
  // affineplane.tran2.scaleBy(tr, center, multiplier)
  //
  // Scale image of the transform by the given multiplier
  // so that the given center point stays fixed.
  // The operation is also called homothety.
  //
  // Parameter
  //   tr
  //     a tran2, a transform
  //   center
  //     a point2, a point on the image of the transform
  //   multiplier
  //     a number
  //
  // Return
  //   a tran2, a transform
  //
  const m = multiplier // alias
  const cx = center.x
  const cy = center.y

  if (m < EPSILON) {
    const msg = 'Expected positive scale factor but saw zero or negative: '
    throw new Error(msg + m)
  }

  return {
    a: m * tr.a,
    b: m * tr.b,
    x: m * tr.x + (1 - m) * cx,
    y: m * tr.y + (1 - m) * cy
  }
}
