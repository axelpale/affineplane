const validOrient = require('../orient2/validate')
const validPoint = require('../point2/validate')
const validSize = require('../size2/validate')

module.exports = (b) => {
  // @affineplane.box2.validate(b)
  //
  // Check if the object is a valid box2.
  // Valid box2 has properties a and b that represent valid rotation matrix,
  // properties x and y that are valid numbers, and properties w and h that
  // represent size.
  //
  // Parameter
  //   b
  //     an object
  //
  // Return
  //   a boolean, true if valid box2
  //
  if (!b) {
    return false
  }

  if (!validOrient(b)) {
    return false
  }

  if (!validPoint(b)) {
    return false
  }

  if (!validSize(b)) {
    return false
  }

  return true
}
