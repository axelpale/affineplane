const vec2 = require('../../lib/vec2')
const vec3 = require('../../lib/vec3')

module.exports = function (actual, expected, message) {
  // Custom tape.js assertion.

  let isEqual = false
  if (vec3.validate(expected)) {
    // Expect vec3
    isEqual = vec3.validate(actual)
    isEqual = isEqual && vec3.almostEqual(actual, expected)
  } else if (vec2.validate(expected)) {
    // Expect vec2
    isEqual = vec2.validate(actual)
    isEqual = isEqual && vec2.almostEqual(actual, expected)
  }

  this._assert(isEqual, {
    message: message || 'vector should have correct elements',
    operator: 'almostEqualVector',
    actual,
    expected
  })
}
