// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test'),
  fromSpherical: require('./fromSpherical.test'),
  fromVector: require('./fromVector.test'),
  toVector: require('./toVector.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.dir3.' + unitName, units[unitName])
  })
}
