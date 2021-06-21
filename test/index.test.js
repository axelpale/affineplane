const test = require('tape')
const EPSILON = require('../lib/epsilon')
const transform = require('../lib/transform')
const vector = require('../lib/vector')
const transformAlmostEqual = transform.almostEqual
const vectorAlmostEqual = vector.almostEqual

// Units

const epsilonTest = require('./epsilon/index.test')
const transformTest = require('./transform/index.test')
const vectorTest = require('./vector/index.test')
const versionTest = require('./version/index.test')

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
  t.test('affineplane.epsilon', epsilonTest)
  t.test('affineplane.transform', transformTest)
  t.test('affineplane.vector', vectorTest)
  t.test('affineplane.version', versionTest)
})
