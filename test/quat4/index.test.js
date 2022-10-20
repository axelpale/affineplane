// A unit for each method.
const units = {
  conjugate: require('./conjugate.test'),
  difference: require('./difference.test'),
  hamilton: require('./hamilton.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.quat4.' + unitName, units[unitName])
  })
}
