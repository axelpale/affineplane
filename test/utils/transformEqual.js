const tran2 = require('../../lib/tran2')
const tran2AlmostEqual = tran2.almostEqual

module.exports = function (actual, expected, message) {
  // Custom tape.js assertion.
  this._assert(tran2AlmostEqual(actual, expected), {
    message: message || 'tran2 should have correct elements',
    operator: 'transformEqual',
    actual: actual,
    expected: expected
  })
}
