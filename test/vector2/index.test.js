// A unit for each method.
const units = {
  add: require('./add.test'),
  almostEqual: require('./almostEqual.test'),
  average: require('./average.test'),
  copy: require('./copy.test'),
  create: require('./create.test'),
  // difference: require('./difference.test'),
  // equal: require('./equal.test'),
  // fromPolar: require('./fromPolar.test'),
  // inverse: require('./inverse.test'),
  // magnitude: require('./magnitude.test'),
  // max: require('./max.test'),
  // min: require('./min.test'),
  rotateBy: require('./rotateBy.test'),
  // rotateTo: require('./rotateTo.test'),
  sum: require('./sum.test'),
  toPolar: require('./toPolar.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.vector2.' + unitName, units[unitName])
  })
}
