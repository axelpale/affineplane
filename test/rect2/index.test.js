// A unit for each method.
const units = {
  at: require('./at.test'),
  atNorm: require('./atNorm.test'),
  create: require('./create.test'),
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.rect2.' + unitName, units[unitName])
  })
}
