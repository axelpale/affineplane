const orient2 = require('../../lib/orient2')

module.exports = function (actual, expected, message) {
  // Custom tape.js assertion.

  let isEqual = false
  if (orient2.validate(expected)) {
    // Expect orient2
    isEqual = orient2.validate(actual)
    isEqual = isEqual && orient2.almostEqual(actual, expected)
  }

  this._assert(isEqual, {
    message: message || 'orientation should have correct elements',
    operator: 'almostEqualOrientation',
    actual,
    expected
  })
}
