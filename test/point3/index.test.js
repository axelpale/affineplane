// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test'),
  average: require('./average.test'),
  copy: require('./copy.test'),
  difference: require('./difference.test'),
  direction: require('./direction.test'),
  distance: require('./distance.test'),
  distanceToLine: require('./distanceToLine.test'),
  distanceToPlane: require('./distanceToPlane.test'),
  equal: require('./equal.test'),
  fromArray: require('./fromArray.test'),
  homothety: require('./homothety.test'),
  offset: require('./offset.test'),
  polarOffset: require('./polarOffset.test'),
  projectByDistance: require('./projectByDistance.test'),
  projectToPlane: require('./projectToPlane.test'),
  rotateAroundLine: require('./rotateAroundLine.test'),
  rotateBy: require('./rotateBy.test'),
  round: require('./round.test'),
  toArray: require('./toArray.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  translate: require('./translate.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.point3.' + unitName, units[unitName])
  })
}
