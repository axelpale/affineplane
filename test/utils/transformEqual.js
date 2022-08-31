const helm2 = require('../../lib/helm2')
const helm2AlmostEqual = helm2.almostEqual

module.exports = function (actual, expected, message) {
  // Custom tape.js assertion.
  this._assert(helm2AlmostEqual(actual, expected), {
    message: message || 'helm2 should have correct elements',
    operator: 'transformEqual',
    actual,
    expected
  })
}
