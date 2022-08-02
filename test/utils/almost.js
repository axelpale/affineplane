const EPSILON = require('../../lib/epsilon')
const vec2 = require('../../lib/vec2')
const vec3 = require('../../lib/vec3')
const helm2 = require('../../lib/helm2')
const helm3 = require('../../lib/helm3')

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
        if ('a' in expected && 'b' in expected) {
          assertion = helm3.almostEqual(actual, expected)
        } else {
          assertion = vec3.almostEqual(actual, expected)
        }
      } else {
        if ('a' in expected && 'b' in expected) {
          assertion = helm2.almostEqual(actual, expected)
        } else {
          assertion = vec2.almostEqual(actual, expected)
        }
      }
    } else {
      assertion = actual === expected
    }
  } else {
    assertion = actual === expected
  }

  return assertion
}
