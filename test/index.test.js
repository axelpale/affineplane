const test = require('tape')
const EPSILON = require('../lib/epsilon')
const tran2 = require('../lib/tran2')
const vector2 = require('../lib/vector2')
const tran2AlmostEqual = tran2.almostEqual
const vector2AlmostEqual = vector2.almostEqual

// Units

const units = {
  'affineplane.epsilon': require('./epsilon/index.test'),
  'affineplane.proj2': require('./proj2/index.test'),
  'affineplane.dir2': require('./dir2/index.test'),
  'affineplane.point2': require('./point2/index.test'),
  'affineplane.tran2': require('./tran2/index.test'),
  'affineplane.vector2': require('./vector2/index.test'),
  'affineplane.version': require('./version/index.test')
}

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
  // Test each unit.
  Object.keys(units).forEach((unitName) => {
    t.test(unitName, units[unitName])
  })
})
