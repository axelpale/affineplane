// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test'),
  fromAngles: require('./fromAngles.test'),
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.dir3.' + unitName, units[unitName])
  })
}
