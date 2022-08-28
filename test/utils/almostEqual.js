const almost = require('./almost')

module.exports = function (actual, expected, message) {
  // Custom tape.js assertion.
  //
  // Detects almost equality of numbers, points, and vectors.
  //
  const assertion = almost(actual, expected)

  this._assert(assertion, {
    message: message || 'should be almost equal',
    operator: 'almostEqual',
    actual: actual,
    expected: expected
  })
}
