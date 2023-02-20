// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test'),
  at: require('./at.test'),
  atNorm: require('./atNorm.test'),
  create: require('./create.test'),
  fromPoints: require('./fromPoints.test'),
  getAngle: require('./getAngle.test'),
  getBasis: require('./getBasis.test'),
  getBounds: require('./getBounds.test'),
  getMinimumBounds: require('./getMinimumBounds.test'),
  getSize: require('./getSize.test'),
  getVolume: require('./getVolume.test'),
  homothety: require('./homothety.test'),
  projectToPlane: require('./projectToPlane.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.box3.' + unitName, units[unitName])
  })
}
