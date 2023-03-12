// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test'),
  atCenter: require('./atCenter.test'),
  boundingBox: require('./boundingBox.test'),
  collide: require('./collide.test'),
  gap: require('./gap.test'),
  hasPoint: require('./hasPoint.test'),
  homothety: require('./homothety.test'),
  offset: require('./offset.test'),
  projectToPlane: require('./projectToPlane.test'),
  rotateAroundLine: require('./rotateAroundLine.test'),
  rotateBy: require('./rotateBy.test'),
  size: require('./size.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  validate: require('./validate.test'),
  volume: require('./volume.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.sphere3.' + unitName, units[unitName])
  })
}
