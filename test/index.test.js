const test = require('tape')
const EPSILON = require('../lib/epsilon')
const tran2 = require('../lib/tran2')
const vector2 = require('../lib/vector2')
const tran2AlmostEqual = tran2.almostEqual
const vector2AlmostEqual = vector2.almostEqual

// Units

const epsilonTest = require('./epsilon/index.test')
const dir2Test = require('./dir2/index.test')
const tran2Test = require('./tran2/index.test')
const vector2Test = require('./vector2/index.test')
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
  this._assert(tran2AlmostEqual(actual, expected), {
    message: message || 'tran2 should have correct elements',
    operator: 'transformEqual',
    actual: actual,
    expected: expected
  })
}
test.Test.prototype.vectorEqual = function (actual, expected, message) {
  this._assert(vector2AlmostEqual(actual, expected), {
    message: message || 'vector2 should have correct elements',
    operator: 'vectorEqual',
    actual: actual,
    expected: expected
  })
}

// Run test suite

test('affineplane', (t) => {
  t.test('affineplane.epsilon', epsilonTest)
  t.test('affineplane.dir2', dir2Test)
  t.test('affineplane.tran2', tran2Test)
  t.test('affineplane.vector2', vector2Test)
  t.test('affineplane.version', versionTest)
})
