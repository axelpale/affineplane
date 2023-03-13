const sphere2 = require('../../lib/sphere2')
const sphere3 = require('../../lib/sphere3')

module.exports = function (actual, expected, message) {
  // Custom tape.js assertion.

  let isEqual = false
  if (sphere3.validate(expected)) {
    // Expect sphere3
    isEqual = sphere3.validate(actual)
    isEqual = isEqual && sphere3.almostEqual(actual, expected)
  } else if (sphere2.validate(expected)) {
    // Expect sphere2
    isEqual = sphere2.validate(actual)
    isEqual = isEqual && sphere2.almostEqual(actual, expected)
  }

  this._assert(isEqual, {
    message: message || 'sphere should have correct elements',
    operator: 'almostEqualSphere',
    actual,
    expected
  })
}
