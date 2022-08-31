const almost = require('./almost')

module.exports = function (actual, expected, message) {
  // Custom tape.js assertion.
  //
  const actualValue = actual
  const assertion = almost(actualValue, expected)

  this._assert(!assertion, {
    message: message || 'should not be almost equal',
    operator: 'notAlmostEqual',
    actual: actualValue,
    expected: 'not ' + expected
  })
}
