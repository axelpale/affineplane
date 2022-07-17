const EPSILON = require('../epsilon')

module.exports = (tr) => {
  // affineplane.tran2.validate(tr)
  //
  // Check if object is a valid tran2.
  //
  // Parameters:
  //   tr
  //     an object
  //
  // Return
  //   a boolean
  //

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
  if (tr.a * tr.a + tr.b * tr.b < EPSILON) {
    // Scale zero is not allowed
    return false
  }
  return true
}
