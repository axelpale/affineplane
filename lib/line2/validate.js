const validatePoint2 = require('../point2/validate')
const validateVec2 = require('../vec2/validate')
const epsilon = require('../epsilon')

module.exports = (l) => {
  // affineplane.line2.validate(l)
  //
  // Check if the object is a valid line2.
  // Valid line2 has origin and span properties
  // that are valid point2 and vec2, respectively.
  //
  // Parameter
  //   l
  //     an object
  //
  // Return
  //   a boolean, true if valid line2
  //
  if (!l) {
    return false
  }

  if (!validatePoint2(l.origin)) {
    return false
  }

  const span = l.span
  if (!validateVec2(span)) {
    return false
  }

  if (span.x * span.x + span.y * span.y < epsilon) {
    return false
  }

  return true
}
