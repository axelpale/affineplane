const fromAxisAngle = require('../quat4/fromAxisAngle')
const rotateVector = require('../quat4/rotateVector')
const pointDiff = require('../point3/difference')
const pointTranslate = require('../point3/translate')

module.exports = function (sp, line, rads) {
  // @affineplane.sphere3.rotateAroundLine(sp, line, rads)
  //
  // Rotate a sphere around the axis line by the given radians.
  //
  // Parameters
  //   sp
  //     a sphere3
  //   line
  //     a line3, the rotation axis
  //   rads
  //     a number, angle in radians
  //
  // Return
  //   a sphere3, the rotated sphere
  //

  // Convert to quaternion, note halved angle cuz will double.
  const q = fromAxisAngle(line.span, rads / 2)
  // Construct a vector to rotate.
  const v = pointDiff(line.origin, sp)
  const vv = rotateVector(q, v)
  // Apply the rotated vector to origin
  const p = pointTranslate(line.origin, vv)

  // Patch radius
  p.r = sp.r

  return p
}
