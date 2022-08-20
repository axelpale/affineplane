const validatePoint3 = require('../point3/validate')
const validateVec3 = require('../vec3/validate')
const epsilon = require('../epsilon')

module.exports = (l) => {
  // affineplane.line3.validate(l)
  //
  // Check if the object is a valid line3.
  // Valid line3 has origin and span properties
  // that are valid point3 and vec3, respectively.
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

  if (!validatePoint3(l.origin)) {
    return false
  }

  const span = l.span
  if (!validateVec3(span)) {
    return false
  }

  // Spanning vector should not be a zero vector.
  // If so, the line becomes a point.
  const dist2 = span.x * span.x + span.y * span.y + span.z * span.z
  if (dist2 < epsilon) {
    return false
  }

  return true
}
