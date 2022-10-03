// A unit for each method.
const units = {
  create: require('./almostEqual.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.dir3.' + unitName, units[unitName])
  })
}
