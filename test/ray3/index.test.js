// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test'),
  copy: require('./copy.test'),
  create: require('./create.test'),
  getOrigin: require('./getOrigin.test'),
  getVector: require('./getVector.test'),
  homothety: require('./homothety.test'),
  invert: require('./invert.test'),
  offset: require('./offset.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.ray3.' + unitName, units[unitName])
  })
}
