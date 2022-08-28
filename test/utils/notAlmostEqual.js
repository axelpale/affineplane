const almost = require('./almost')

module.exports = function (actual, expected, message) {
  // Custom tape.js assertion.
  //
  const assertion = almost(actual, expected)

  this._assert(!assertion, {
    message: message || 'should not be almost equal',
    operator: 'notAlmostEqual',
    actual: actual,
    expected: 'not ' + expected
  })
}
