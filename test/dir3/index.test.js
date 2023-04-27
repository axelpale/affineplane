// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test'),
  copy: require('./copy.test'),
  fromSpherical: require('./fromSpherical.test'),
  fromVector: require('./fromVector.test'),
  projectToPlane: require('./projectToPlane.test'),
  toSpherical: require('./toSpherical.test'),
  toVector: require('./toVector.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.dir3.' + unitName, units[unitName])
  })
}
