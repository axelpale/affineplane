const EPSILON = require('../../lib/epsilon')
const vec2 = require('../../lib/vec2')
const vec3 = require('../../lib/vec3')
const vec2AlmostEqual = vec2.almostEqual
const vec3AlmostEqual = vec3.almostEqual

module.exports = function (actual, expected) {
  // Detects almost equality of numbers, points, and vectors.
  //
  const type = typeof expected

  let assertion

  if (type === 'number') {
    assertion = Math.abs(actual - expected) < EPSILON
  } else if (type === 'object') {
    if ('x' in expected && 'y' in expected) {
      if ('z' in expected) {
        assertion = vec3AlmostEqual(actual, expected)
      } else {
        assertion = vec2AlmostEqual(actual, expected)
      }
    } else {
      assertion = actual === expected
    }
  } else {
    assertion = actual === expected
  }

  return assertion
}
