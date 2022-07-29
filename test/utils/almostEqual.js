const EPSILON = require('../../lib/epsilon')
const vec2 = require('../../lib/vec2')
const vec3 = require('../../lib/vec3')
const vec2AlmostEqual = vec2.almostEqual
const vec3AlmostEqual = vec3.almostEqual

module.exports = function (actual, expected, message) {
  // Custom tape.js assertion.
  //
  // Detects almost equality of numbers, points, and vectors.
  //
  const type = typeof expected

  let assertion
  let defaultMsg

  if (type === 'number') {
    assertion = Math.abs(actual - expected) < EPSILON
    defaultMsg = 'should be almost equal'
  } else if (type === 'object') {
    if ('x' in expected && 'y' in expected) {
      if ('z' in expected) {
        assertion = vec3AlmostEqual(actual, expected)
        defaultMsg = 'vec3 should have correct elements'
      } else {
        assertion = vec2AlmostEqual(actual, expected)
        defaultMsg = 'vec2 should have correct elements'
      }
    } else {
      assertion = actual === expected
      defaultMsg = 'should be equal'
    }
  } else {
    assertion = actual === expected
    defaultMsg = 'should be equal'
  }

  this._assert(assertion, {
    message: message || defaultMsg,
    operator: 'almostEqual',
    actual: actual,
    expected: expected
  })
}
