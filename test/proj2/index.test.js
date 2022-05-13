// A unit for each method.
const units = {
  dir2: require('./dir2.test'),
  size2: require('./size2.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.proj2.' + unitName, units[unitName])
  })
}
