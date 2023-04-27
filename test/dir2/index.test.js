// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test'),
  fromPolar: require('./fromPolar.test'),
  fromVector: require('./fromVector.test'),
  projectToPlane: require('./projectToPlane.test'),
  toPolar: require('./toPolar.test'),
  toVector: require('./toVector.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.dir2.' + unitName, units[unitName])
  })
}
