// A unit for each method.
const units = {
  hamilton: require('./hamilton.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.quat4.' + unitName, units[unitName])
  })
}
