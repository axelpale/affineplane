// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test'),
  collide: require('./collide.test'),
  gap: require('./gap.test'),
  hasPoint: require('./hasPoint.test'),
  homothety: require('./homothety.test'),
  offset: require('./offset.test'),
  projectToPlane: require('./projectToPlane.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.sphere3.' + unitName, units[unitName])
  })
}
