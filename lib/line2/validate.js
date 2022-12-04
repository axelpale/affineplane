const validatePoint2 = require('../point2/validate')
const validateVec2 = require('../vec2/validate')
const epsilon = require('../epsilon')
const abs = Math.abs

module.exports = (obj) => {
  // affineplane.line2.validate(obj)
  //
  // Check if the object is a valid line2.
  // Valid line2 has origin and span properties
  // that are valid point2 and vec2, respectively.
  //
  // Parameter
  //   obj
  //     an object, the line candidate.
  //
  // Return
  //   a boolean, true if valid line2
  //
  if (!obj) {
    return false
  }

  if (!validatePoint2(obj.origin)) {
    return false
  }

  const span = obj.span
  if (!validateVec2(span)) {
    return false
  }

  // Spanning vector should not be a zero vector.
  // If so, the line becomes a point.
  // We use manhattan distance so that multiplication does not
  // hide the close-to-zero values due to floating point arithmetics.
  const manhat = abs(span.x) + abs(span.y)
  if (manhat < epsilon) {
    return false
  }

  return true
}
