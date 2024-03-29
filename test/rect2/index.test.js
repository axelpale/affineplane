// A unit for each method.
const units = {
  at: require('./at.test'),
  atNorm: require('./atNorm.test'),
  create: require('./create.test'),
  getArea: require('./getArea.test'),
  getBounds: require('./getBounds.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.rect2.' + unitName, units[unitName])
  })
}
