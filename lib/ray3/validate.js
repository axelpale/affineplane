const EPSILON = require('../epsilon')
const abs = Math.abs
const isNaN = Number.isNaN

module.exports = (r) => {
  // @affineplane.ray3.validate(r)
  //
  // Check if object is a valid ray3. Valid ray has numeric properties
  // x, y, z, dx, dy, dz and has non-zero spanning vector.
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

  if (typeof r.x !== 'number' || isNaN(r.x)) {
    return false
  }
  if (typeof r.y !== 'number' || isNaN(r.y)) {
    return false
  }
  if (typeof r.z !== 'number' || isNaN(r.z)) {
    return false
  }
  if (typeof r.dx !== 'number' || isNaN(r.dx)) {
    return false
  }
  if (typeof r.dy !== 'number' || isNaN(r.dy)) {
    return false
  }
  if (typeof r.dz !== 'number' || isNaN(r.dz)) {
    return false
  }
  if (abs(r.dx) + abs(r.dy) + abs(r.dz) < EPSILON) {
    return false
  }

  return true
}
