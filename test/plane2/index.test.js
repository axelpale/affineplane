// A unit for each method.
const units = {
  compose: require('./compose.test'),
  create: require('./create.test'),
  difference: require('./difference.test'),
  fromFeatures: require('./fromFeatures.test'),
  getScale: require('./getScale.test'),
  invert: require('./invert.test'),
  projectToPlane: require('./projectToPlane.test'),
  rotateBy: require('./rotateBy.test'),
  rotateTo: require('./rotateTo.test'),
  rotateToOrtho: require('./rotateToOrtho.test'),
  scaleBy: require('./scaleBy.test'),
  scaleTo: require('./scaleTo.test'),
  transform: require('./transform.test'),
  translateBy: require('./translateBy.test'),
  translateTo: require('./translateTo.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.plane2.' + unitName, units[unitName])
  })
}
