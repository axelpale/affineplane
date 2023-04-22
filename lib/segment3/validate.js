const validatePoint = require('../point3/validate')

module.exports = (seg) => {
  // @affineplane.segment3.validate(seg)
  //
  // Check if the object is a valid segment3.
  // A valid segment3 is an array of two valid point3 objects.
  //
  // Parameter
  //   seg
  //     an object
  //
  // Return
  //   a boolean, true if valid
  //
  return Array.isArray(seg) && seg.length === 2 &&
    validatePoint(seg[0]) && validatePoint(seg[1])
}
