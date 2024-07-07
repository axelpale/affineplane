// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test'),
  atCenter: require('./atCenter.test'),
  boundingBox: require('./boundingBox.test'),
  boundingCircle: require('./boundingCircle.test'),
  collide: require('./collide.test'),
  collisionArea: require('./collisionArea.test'),
  fromPoints: require('./fromPoints.test'),
  gap: require('./gap.test'),
  hasPoint: require('./hasPoint.test'),
  homothety: require('./homothety.test'),
  offset: require('./offset.test'),
  polarOffset: require('./polarOffset.test'),
  rotateBy: require('./rotateBy.test'),
  size: require('./size.test'),
  tangentCircle: require('./tangentCircle.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.sphere2.' + unitName, units[unitName])
  })
}
