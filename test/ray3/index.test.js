// A unit for each method.
const units = {
  copy: require('./copy.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.ray3.' + unitName, units[unitName])
  })
}
