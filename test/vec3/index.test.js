// A unit for each method.
const units = {
  cross: require('./cross.test'),
  dot: require('./dot.test'),
  equal: require('./equal.test'),
  fromPolar: require('./fromPolar.test'),
  fromSpherical: require('./fromSpherical.test'),
  invert: require('./invert.test'),
  magnitude: require('./magnitude.test'),
  projectTo: require('./projectTo.test'),
  rotateBy: require('./rotateBy.test'),
  rotateTo: require('./rotateTo.test'),
  scaleBy: require('./scaleBy.test'),
  scaleTo: require('./scaleTo.test'),
  sum: require('./sum.test'),
  toPolar: require('./toPolar.test'),
  toSpherical: require('./toSpherical.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  unit: require('./unit.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.vec3.' + unitName, units[unitName])
  })
}
