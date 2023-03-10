const validatePoint = require('../point3/validate')

module.exports = (p) => {
  // @affineplane.path3.validate(p)
  //
  // Check if the object is a valid path3.
  // A valid path3 is an array of valid point3 objects.
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
