const point2 = require('../../lib/point2')
const point3 = require('../../lib/point3')

module.exports = function (actual, expected, message) {
  // Custom tape.js assertion.

  let isEqual = false
  if (point3.validate(expected)) {
    // Expect point3
    isEqual = point3.validate(actual)
    isEqual = isEqual && point3.almostEqual(actual, expected)
  } else if (point2.validate(expected)) {
    // Expect point2
    isEqual = point2.validate(actual)
    isEqual = isEqual && point2.almostEqual(actual, expected)
  }

  this._assert(isEqual, {
    message: message || 'point should have correct elements',
    operator: 'almostEqualPoint',
    actual,
    expected
  })
}
