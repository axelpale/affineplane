const test = require('tape')
const affineplane = require('../index')
const EPSILON = affineplane.transform.EPSILON
const transformAlmostEqual = affineplane.transform.almostEqual
const vectorAlmostEqual = affineplane.vector.almostEqual

// Units

const transform = require('./transform/index.test')
const vector = require('./vector/index.test')
const version = require('./version/index.test')

// Custom assertations

test.Test.prototype.almostEqual = function (actual, expected, message) {
  const isAlmost = Math.abs(actual - expected) < EPSILON
  this._assert(isAlmost, {
    message: message || 'should be almost equal',
    operator: 'almostEqual',
    actual: actual,
    expected: expected
  })
}

test.Test.prototype.notAlmostEqual = function (actual, expected, message) {
  const isAlmost = Math.abs(actual - expected) < EPSILON
  this._assert(!isAlmost, {
    message: message || 'should not be almost equal',
    operator: 'notAlmostEqual',
    actual: actual,
    expected: 'not ' + expected
  })
}

test.Test.prototype.transformEqual = function (actual, expected, message) {
  this._assert(transformAlmostEqual(actual, expected), {
    message: message || 'transform should have correct elements',
    operator: 'transformEqual',
    actual: actual,
    expected: expected
  })
}
test.Test.prototype.vectorEqual = function (actual, expected, message) {
  this._assert(vectorAlmostEqual(actual, expected), {
    message: message || 'vector should have correct elements',
    operator: 'vectorEqual',
    actual: actual,
    expected: expected
  })
}

// Run test suite

test('affineplane', (t) => {
  t.test('affineplane.transform', transform)
  t.test('affineplane.vector', vector)
  t.test('affineplane.version', version)
})
