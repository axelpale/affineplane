const validatePoint = require('../point2/validate')

module.exports = (p) => {
  // @affineplane.path2.validate(p)
  //
  // Check if the object is a valid path2.
  // A valid path2 is an array of valid point2 objects.
  //
  // Parameter
  //   p
  //     an object
  //
  // Return
  //   a boolean, true if valid
  //
  return Array.isArray(p) && p.every(point => validatePoint(point))
}
