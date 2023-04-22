const test = require('tape')

// Units

const units = {
  'affineplane.angle': require('./angle/index.test'),
  'affineplane.box2': require('./box2/index.test'),
  'affineplane.box3': require('./box3/index.test'),
  'affineplane.circle3': require('./circle3/index.test'),
  'affineplane.dir2': require('./dir2/index.test'),
  'affineplane.dir3': require('./dir3/index.test'),
  'affineplane.dist2': require('./dist2/index.test'),
  'affineplane.dist3': require('./dist3/index.test'),
  'affineplane.epsilon': require('./epsilon/index.test'),
  'affineplane.helm2': require('./helm2/index.test'),
  'affineplane.helm3': require('./helm3/index.test'),
  'affineplane.line2': require('./line2/index.test'),
  'affineplane.line3': require('./line3/index.test'),
  'affineplane.orient2': require('./orient2/index.test'),
  'affineplane.path2': require('./path2/index.test'),
  'affineplane.path3': require('./path3/index.test'),
  'affineplane.plane2': require('./plane2/index.test'),
  'affineplane.plane3': require('./plane3/index.test'),
  'affineplane.point2': require('./point2/index.test'),
  'affineplane.point3': require('./point3/index.test'),
  'affineplane.quat4': require('./quat4/index.test'),
  'affineplane.rect2': require('./rect2/index.test'),
  'affineplane.rect3': require('./rect3/index.test'),
  'affineplane.rot2': require('./rot2/index.test'),
  'affineplane.scalar1': require('./scalar1/index.test'),
  'affineplane.scalar2': require('./scalar2/index.test'),
  'affineplane.scalar3': require('./scalar3/index.test'),
  'affineplane.segment2': require('./segment2/index.test'),
  'affineplane.sphere2': require('./sphere2/index.test'),
  'affineplane.sphere3': require('./sphere3/index.test'),
  'affineplane.size2': require('./size2/index.test'),
  'affineplane.size3': require('./size3/index.test'),
  'affineplane.vec2': require('./vec2/index.test'),
  'affineplane.vec3': require('./vec3/index.test'),
  'affineplane.vec4': require('./vec4/index.test'),
  'affineplane.version': require('./version/index.test')
}

// Custom assertations

test.Test.prototype.almostEqual = require('./utils/almostEqual')
test.Test.prototype.notAlmostEqual = require('./utils/notAlmostEqual')
test.Test.prototype.transformEqual = require('./utils/transformEqual')
test.Test.prototype.almostEqualBasis = require('./utils/almostEqualBasis')
test.Test.prototype.almostEqualBox = require('./utils/almostEqualBox')
test.Test.prototype.almostEqualCircle = require('./utils/almostEqualSphere')
test.Test.prototype.almostEqualPoint = require('./utils/almostEqualPoint')
test.Test.prototype.almostEqualSphere = test.Test.prototype.almostEqualCircle
test.Test.prototype.almostEqualVector = require('./utils/almostEqualVector')

// Run test suite

test('affineplane', (t) => {
  // Test each unit.
  Object.keys(units).forEach((unitName) => {
    t.test(unitName, units[unitName])
  })
})
