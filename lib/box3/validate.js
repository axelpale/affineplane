const validOrient = require('../orient2/validate')
const validPoint = require('../point3/validate')
const validSize = require('../size3/validate')

module.exports = (b) => {
  // @affineplane.box3.validate(b)
  //
  // Check if the object is a valid box3.
  // Valid box3 has properties a and b that represent valid rotation matrix,
  // properties x, y, z that are valid numbers, and properties w, h, d that
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
