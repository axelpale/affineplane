const validatePoint = require('../point2/validate')

module.exports = (seg) => {
  // @affineplane.segment2.validate(seg)
  //
  // Check if the object is a valid segment2.
  // A valid segment2 is an array of two valid point2 objects.
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
