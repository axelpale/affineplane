// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test'),
  copy: require('./copy.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.circle3.' + unitName, units[unitName])
  })
}
