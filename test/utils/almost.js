const EPSILON = require('../../lib/epsilon')
const vec2 = require('../../lib/vec2')
const vec3 = require('../../lib/vec3')
const helm2 = require('../../lib/helm2')
const helm3 = require('../../lib/helm3')
const hasSameProps = require('./hasSameProps')

module.exports = function (actual, expected) {
  // Detects almost equality of numbers, points, and vectors.
  //
  const type = typeof expected

  if (type === 'number') {
    return Math.abs(actual - expected) < EPSILON
  }

  if (type === 'object') {
    // Test that same properties
    if (!hasSameProps(actual, expected)) {
      return false
    }

    // Test almost equality
    if ('x' in expected && 'y' in expected) {
      if ('z' in expected) {
        if ('a' in expected && 'b' in expected) {
          return helm3.almostEqual(actual, expected)
        }
        return vec3.almostEqual(actual, expected)
      }

      if ('a' in expected && 'b' in expected) {
        return helm2.almostEqual(actual, expected)
      }

      return vec2.almostEqual(actual, expected)
    }

    return actual === expected
  }

  return actual === expected
}
