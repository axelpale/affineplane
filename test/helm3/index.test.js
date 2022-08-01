// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test'),
  create: require('./create.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.helm3.' + unitName, units[unitName])
  })
}
