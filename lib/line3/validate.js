const validatePoint3 = require('../point3/validate')
const validateVec3 = require('../vec3/validate')
const epsilon = require('../epsilon')
const abs = Math.abs

module.exports = (line) => {
  // affineplane.line3.validate(line)
  //
  // Check if the object is a valid line3.
  // Valid line3 has origin and span properties
  // that are valid point3 and vec3, respectively.
  //
  // Parameter
  //   line
  //     an object
  //
  // Return
  //   a boolean, true if valid line2
  //
  if (!line) {
    return false
  }

  if (!validatePoint3(line.origin)) {
    return false
  }

  const span = line.span
  if (!validateVec3(span)) {
    return false
  }

  // Spanning vector should not be a zero vector.
  // If so, the line becomes a point.
  // We use manhattan distance so that multiplication does not
  // hide the close-to-zero values due to floating point arithmetics.
  const manhat = abs(span.x) + abs(span.y) + abs(span.z)
  if (manhat < epsilon) {
    return false
  }

  return true
}
