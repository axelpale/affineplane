const EPSILON = require('../../lib/epsilon')

module.exports = function (actual, expected, message) {
  // Custom tape.js assertion
  const isAlmost = Math.abs(actual - expected) < EPSILON
  this._assert(isAlmost, {
    message: message || 'should be almost equal',
    operator: 'almostEqual',
    actual: actual,
    expected: expected
  })
}
