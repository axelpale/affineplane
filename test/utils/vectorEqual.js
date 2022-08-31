const vec2 = require('../../lib/vec2')
const vec2AlmostEqual = vec2.almostEqual

module.exports = function (actual, expected, message) {
  // Custom tape.js assertion.
  this._assert(vec2AlmostEqual(actual, expected), {
    message: message || 'vec2 should have correct elements',
    operator: 'vectorEqual',
    actual,
    expected
  })
}
