const EPSILON = require('../../lib/epsilon')
const vec2 = require('../../lib/vec2')
const vec3 = require('../../lib/vec3')
const vec2AlmostEqual = vec2.almostEqual
const vec3AlmostEqual = vec3.almostEqual

module.exports = function (actual, expected, message) {
  // Custom tape.js assertion.
  //
  const type = typeof expected

  let assertion
  let defaultMsg

  if (type === 'number') {
    assertion = Math.abs(actual - expected) < EPSILON
    defaultMsg = 'should not be almost equal'
  } else if (type === 'object') {
    if ('x' in expected && 'y' in expected) {
      if ('z' in expected) {
        assertion = vec3AlmostEqual(actual, expected)
        defaultMsg = 'vector should not have equal elements'
      } else {
        assertion = vec2AlmostEqual(actual, expected)
        defaultMsg = 'vector should not have equal elements'
      }
    } else {
      assertion = actual === expected
      defaultMsg = 'should not be equal'
    }
  } else {
    assertion = actual === expected
    defaultMsg = 'should not be equal'
  }

  this._assert(!assertion, {
    message: message || defaultMsg,
    operator: 'notAlmostEqual',
    actual: actual,
    expected: 'not ' + expected
  })
}
