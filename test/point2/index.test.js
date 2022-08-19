// A unit for each method.
const units = {
  difference: require('./difference.test'),
  projectToLine: require('./projectToLine.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.point2.' + unitName, units[unitName])
  })
}
