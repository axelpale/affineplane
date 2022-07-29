const vector2 = require('../../lib/vector2')
const vector2AlmostEqual = vector2.almostEqual

module.exports = function (actual, expected, message) {
  // Custom tape.js assertion.
  this._assert(vector2AlmostEqual(actual, expected), {
    message: message || 'vector2 should have correct elements',
    operator: 'vectorEqual',
    actual: actual,
    expected: expected
  })
}
