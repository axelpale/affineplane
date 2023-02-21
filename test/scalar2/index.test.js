// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test'),
  create: require('./create.test'),
  equal: require('./equal.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.scalar2.' + unitName, units[unitName])
  })
}