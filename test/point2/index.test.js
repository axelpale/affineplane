// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test'),
  average: require('./average.test'),
  difference: require('./difference.test'),
  direction: require('./direction.test'),
  homothety: require('./homothety.test'),
  offset: require('./offset.test'),
  projectByDistance: require('./projectByDistance.test'),
  projectToLine: require('./projectToLine.test'),
  projectToPlane: require('./projectToPlane.test'),
  transformMany: require('./transformMany.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.point2.' + unitName, units[unitName])
  })
}
