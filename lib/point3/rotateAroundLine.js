const fromAxisAngle = require('../quat4/fromAxisAngle')
const rotateVector = require('../quat4/rotateVector')
const pointDiff = require('./difference')
const pointTranslate = require('./translate')

module.exports = function (p, line, rads) {
  // @affineplane.point3.rotateAroundLine(p, line, rads)
  //
  // Rotate a point around the axis line by the given radians.
  //
  // Parameters
  //   p
  //     a point3
  //   line
  //     a line3, the rotation axis
  //   rads
  //     a number, angle in radians
  //
  // Return
  //   a point3, the rotated point
  //

  // Convert to quaternion, note halved angle cuz will double.
  const q = fromAxisAngle(line.span, rads / 2)
  // Construct a vector to rotate.
  const v = pointDiff(line.origin, p)
  const vv = rotateVector(q, v)
  // Apply the rotated vector to origin
  const pp = pointTranslate(line.origin, vv)

  return pp
}
