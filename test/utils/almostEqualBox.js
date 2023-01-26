const box2 = require('../../lib/box2')
const box3 = require('../../lib/box3')

module.exports = function (actual, expected, message) {
  // Custom tape.js assertion.

  let isEqual = false
  if (box3.validate(expected)) {
    // Expect box3
    isEqual = box3.validate(actual)
    isEqual = isEqual && box3.almostEqual(actual, expected)
  } else if (box2.validate(expected)) {
    // Expect box2
    isEqual = box2.validate(actual)
    isEqual = isEqual && box2.almostEqual(actual, expected)
  }

  this._assert(isEqual, {
    message: message || 'box should have correct elements',
    operator: 'almostEqualBox',
    actual,
    expected
  })
}
