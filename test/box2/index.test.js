// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test'),
  at: require('./at.test'),
  atBox: require('./atBox.test'),
  atNorm: require('./atNorm.test'),
  create: require('./create.test'),
  fromPoints: require('./fromPoints.test'),
  getAngle: require('./getAngle.test'),
  getArea: require('./getArea.test'),
  getBasis: require('./getBasis.test'),
  getBasisInverse: require('./getBasisInverse.test'),
  getBounds: require('./getBounds.test'),
  getCircle: require('./getCircle.test'),
  getMinimumBounds: require('./getMinimumBounds.test'),
  getPath: require('./getPath.test'),
  getSegments: require('./getSegments.test'),
  getSize: require('./getSize.test'),
  hasPoint: require('./hasPoint.test'),
  homothety: require('./homothety.test'),
  offset: require('./offset.test'),
  projectToPlane: require('./projectToPlane.test'),
  resizeBy: require('./resizeBy.test'),
  resizeTo: require('./resizeTo.test'),
  rotateBy: require('./rotateBy.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  translate: require('./translate.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.box2.' + unitName, units[unitName])
  })
}
