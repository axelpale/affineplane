// A unit for each method.
const units = {
  create: require('./create.test'),
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.size3.' + unitName, units[unitName])
  })
}
