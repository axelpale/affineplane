const EPSILON = require('../epsilon')

module.exports = (d) => {
  // @affineplane.dir3.validate(d)
  //
  // Check if object is a valid dir3. Valid dir3 is an object with
  // properties x,y,z that represent a unit vector.
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
  if (typeof d.z !== 'number' || Number.isNaN(d.z)) {
    return false
  }

  if (Math.abs(d.x * d.x + d.y * d.y + d.z * d.z - 1) > EPSILON) {
    return false
  }

  return true
}
