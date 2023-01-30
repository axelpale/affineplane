const EPSILON = require('../epsilon')

module.exports = function (b, bb, tolerance) {
  // @affineplane.box3.almostEqual(b, bb[, tolerance])
  //
  // Are two boxes almost equal?
  //
  // Parameters:
  //   b
  //     a box3
  //   bb
  //     a box3
  //   tolerance
  //     optional number, default is affineplane.epsilon.
  //     .. Set to 0 for strict comparison.
  //
  // Return:
  //   a boolean
  //

  if (typeof tolerance !== 'number') {
    tolerance = EPSILON
  }

  const da = Math.abs(b.a - bb.a)
  const db = Math.abs(b.b - bb.b)
  const dx = Math.abs(b.x - bb.x)
  const dy = Math.abs(b.y - bb.y)
  const dz = Math.abs(b.z - bb.z)
  const dw = Math.abs(b.w - bb.w)
  const dh = Math.abs(b.h - bb.h)
  const dd = Math.abs(b.d - bb.d)

  // smaller-or-equal instead of smaller-than to make tolerance=0 work.
  return da + db + dx + dy + dz + dw + dh + dd <= tolerance
}
