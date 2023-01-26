const EPSILON = require('../epsilon')

module.exports = (r) => {
  // affineplane.rot2.validate(r)
  //
  // Check if the object is a valid rot2. Valid object has properties a and b
  // which represent valid rotation matrix.
  //
  // Parameter
  //   r
  //     an object
  //
  // Return
  //   a boolean
  //
  if (!r) {
    return false
  }

  if (typeof r.a !== 'number' || Number.isNaN(r.a)) {
    return false
  }
  if (typeof r.b !== 'number' || Number.isNaN(r.b)) {
    return false
  }

  // Test orthogonality
  const det = r.a * r.a + r.b * r.b
  if (Math.abs(det - 1) > EPSILON) {
    return false
  }

  return true
}
