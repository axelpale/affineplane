// A unit for each method.
const units = {
  average: require('./average.test'),
  copy: require('./copy.test'),
  difference: require('./difference.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.point3.' + unitName, units[unitName])
  })
}
