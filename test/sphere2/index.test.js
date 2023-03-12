// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test'),
  atCenter: require('./atCenter.test'),
  boundingBox: require('./boundingBox.test'),
  collide: require('./collide.test'),
  gap: require('./gap.test'),
  hasPoint: require('./hasPoint.test'),
  homothety: require('./homothety.test'),
  offset: require('./offset.test'),
  polarOffset: require('./polarOffset.test'),
  rotateBy: require('./rotateBy.test'),
  size: require('./size.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.sphere2.' + unitName, units[unitName])
  })
}
