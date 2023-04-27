// A unit for each method.
const units = {
  add: require('./add.test'),
  almostEqual: require('./almostEqual.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.vec4.' + unitName, units[unitName])
  })
}
