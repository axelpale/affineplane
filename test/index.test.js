const test = require('tape')

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

test.Test.prototype.almostEqual = require('./utils/almostEqual')
test.Test.prototype.notAlmostEqual = require('./utils/notAlmostEqual')
test.Test.prototype.transformEqual = require('./utils/transformEqual')
test.Test.prototype.vectorEqual = require('./utils/vectorEqual')

// Run test suite

test('affineplane', (t) => {
  // Test each unit.
  Object.keys(units).forEach((unitName) => {
    t.test(unitName, units[unitName])
  })
})
