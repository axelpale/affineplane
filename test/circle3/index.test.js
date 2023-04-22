// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.circle3.' + unitName, units[unitName])
  })
}
