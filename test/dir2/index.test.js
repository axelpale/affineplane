// A unit for each method.
const units = {
  fromPolar: require('./fromPolar.test'),
  fromVector: require('./fromVector.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.dir2.' + unitName, units[unitName])
  })
}
