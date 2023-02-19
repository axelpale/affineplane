const plane2 = require('../../lib/plane2')
const plane3 = require('../../lib/plane3')

module.exports = function (actual, expected, message) {
  // Custom tape.js assertion.

  let isEqual = false
  if (plane3.validate(expected)) {
    // Expect plane3
    isEqual = plane3.validate(actual)
    isEqual = isEqual && plane3.almostEqual(actual, expected)
  } else if (plane2.validate(expected)) {
    // Expect plane2
    isEqual = plane2.validate(actual)
    isEqual = isEqual && plane2.almostEqual(actual, expected)
  }

  this._assert(isEqual, {
    message: message || 'plane should have correct elements',
    operator: 'almostEqualPlane',
    actual,
    expected
  })
}
