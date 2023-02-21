// A unit for each method.
const units = {
  add: require('./add.test'),
  cross: require('./cross.test'),
  difference: require('./difference.test'),
  divide: require('./divide.test'),
  dot: require('./dot.test'),
  equal: require('./equal.test'),
  fromPolar: require('./fromPolar.test'),
  fromSpherical: require('./fromSpherical.test'),
  independent: require('./independent.test'),
  invert: require('./invert.test'),
  magnitude: require('./magnitude.test'),
  projectToPlane: require('./projectToPlane.test'),
  projectToVector: require('./projectToVector.test'),
  rotateAroundAxis: require('./rotateAroundAxis.test'),
  rotateBy: require('./rotateBy.test'),
  rotateTo: require('./rotateTo.test'),
  scaleBy: require('./scaleBy.test'),
  scaleTo: require('./scaleTo.test'),
  sum: require('./sum.test'),
  toPolar: require('./toPolar.test'),
  toSpherical: require('./toSpherical.test'),
  transformBy: require('./transformBy.test'),
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
