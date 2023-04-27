const EPSILON = require('../epsilon')

module.exports = (d) => {
  // @affineplane.dir2.validate(d)
  //
  // Check if object is a valid dir2. Valid dir2 is an object with
  // properties x,y that represent a unit vector.
  //
  // Parameter
  //   d
  //     an object
  //
  // Return
  //   a boolean
  //
  if (!d) {
    return false
  }

  if (typeof d.x !== 'number' || Number.isNaN(d.x)) {
    return false
  }
  if (typeof d.y !== 'number' || Number.isNaN(d.y)) {
    return false
  }

  if (Math.abs(d.x * d.x + d.y * d.y - 1) > EPSILON) {
    return false
  }

  return true
}
