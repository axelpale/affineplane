const test = require('tape')

// Units

const units = {
  'affineplane.epsilon': require('./epsilon/index.test'),
  'affineplane.proj2': require('./proj2/index.test'),
  'affineplane.dir2': require('./dir2/index.test'),
  'affineplane.helm2': require('./helm2/index.test'),
  'affineplane.helm3': require('./helm3/index.test'),
  'affineplane.line2': require('./line2/index.test'),
  'affineplane.line3': require('./line3/index.test'),
  'affineplane.plane2': require('./plane2/index.test'),
  'affineplane.plane3': require('./plane3/index.test'),
  'affineplane.point2': require('./point2/index.test'),
  'affineplane.point3': require('./point3/index.test'),
  'affineplane.vec2': require('./vec2/index.test'),
  'affineplane.vec3': require('./vec3/index.test'),
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
