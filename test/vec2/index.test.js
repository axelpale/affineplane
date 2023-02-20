// A unit for each method.
const units = {
  add: require('./add.test'),
  almostEqual: require('./almostEqual.test'),
  average: require('./average.test'),
  copy: require('./copy.test'),
  create: require('./create.test'),
  cross: require('./cross.test'),
  difference: require('./difference.test'),
  divide: require('./divide.test'),
  dot: require('./dot.test'),
  equal: require('./equal.test'),
  fromPolar: require('./fromPolar.test'),
  independent: require('./independent.test'),
  inverse: require('./inverse.test'),
  magnitude: require('./magnitude.test'),
  max: require('./max.test'),
  min: require('./min.test'),
  projectToPlane: require('./projectToPlane.test'),
  projectToVector: require('./projectToVector.test'),
  rotateBy: require('./rotateBy.test'),
  rotateTo: require('./rotateTo.test'),
  scaleBy: require('./scaleBy.test'),
  scaleTo: require('./scaleTo.test'),
  sum: require('./sum.test'),
  toPolar: require('./toPolar.test'),
  transformBy: require('./transformBy.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  unit: require('./unit.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.vec2.' + unitName, units[unitName])
  })
}
