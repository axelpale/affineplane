const helm2 = require('../../lib/helm2')
const helm3 = require('../../lib/helm3')

module.exports = function (actual, expected, message) {
  // Custom tape.js assertion.

  let isEqual = false
  if (helm3.validate(expected)) {
    // Expect helm3
    isEqual = helm3.validate(actual)
    isEqual = isEqual && helm3.almostEqual(actual, expected)
  } else if (helm2.validate(expected)) {
    // Expect helm2
    isEqual = helm2.validate(actual)
    isEqual = isEqual && helm2.almostEqual(actual, expected)
  }

  this._assert(isEqual, {
    message: message || 'helmert should have correct elements',
    operator: 'almostEqualHelmert',
    actual,
    expected
  })
}
