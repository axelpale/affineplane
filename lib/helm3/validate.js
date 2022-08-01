const EPSILON = require('../epsilon')

module.exports = (tr) => {
  // affineplane.helm3.validate(tr)
  //
  // Check if object is a valid helm3.
  //
  // Parameters:
  //   tr
  //     an object
  //
  // Return
  //   a boolean, true if valid helm3
  //

  if (!tr) {
    return false
  }
  if (typeof tr !== 'object') {
    return false
  }

  if (typeof tr.a !== 'number') {
    return false
  }
  if (typeof tr.b !== 'number') {
    return false
  }
  if (typeof tr.x !== 'number') {
    return false
  }
  if (typeof tr.y !== 'number') {
    return false
  }
  if (typeof tr.z !== 'number') {
    return false
  }
  if (tr.a * tr.a + tr.b * tr.b < EPSILON) {
    // Scale zero is not allowed
    return false
  }
  return true
}
