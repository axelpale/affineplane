// A unit for each method.
const units = {
  average: require('./average.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.point3.' + unitName, units[unitName])
  })
}
