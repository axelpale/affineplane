// A unit for each method.
const units = {
  average: require('./average.test'),
  difference: require('./difference.test'),
  homothety: require('./homothety.test'),
  projectToLine: require('./projectToLine.test'),
  projectToPlane: require('./projectToPlane.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.point2.' + unitName, units[unitName])
  })
}
