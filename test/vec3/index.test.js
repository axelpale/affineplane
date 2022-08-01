// A unit for each method.
const units = {
  fromPolar: require('./fromSpherical.test'),
  inverse: require('./inverse.test'),
  magnitude: require('./magnitude.test'),
  rotateBy: require('./rotateBy.test'),
  rotateTo: require('./rotateTo.test'),
  sum: require('./sum.test'),
  toPolar: require('./toSpherical.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.vec3.' + unitName, units[unitName])
  })
}
