// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test'),
  copy: require('./copy.test'),
  create: require('./create.test'),
  equal: require('./equal.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.helm3.' + unitName, units[unitName])
  })
}
