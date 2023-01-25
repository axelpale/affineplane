// A unit for each method.
const units = {
  at: require('./at.test'),
  atNorm: require('./atNorm.test'),
  create: require('./create.test'),
  fromPoints: require('./fromPoints.test'),
  getArea: require('./getArea.test'),
  getBounds: require('./getBounds.test'),
  homothety: require('./homothety.test'),
  projectTo: require('./projectTo.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.box2.' + unitName, units[unitName])
  })
}
