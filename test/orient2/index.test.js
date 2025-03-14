// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test'),
  create: require('./create.test'),
  equal: require('./equal.test'),
  fromPolar: require('./fromPolar.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.orient2.' + unitName, units[unitName])
  })
}
