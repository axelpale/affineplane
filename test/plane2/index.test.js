// A unit for each method.
const units = {
  compose: require('./compose.test'),
  copy: require('./copy.test'),
  create: require('./create.test'),
  difference: require('./difference.test'),
  fromFeatures: require('./fromFeatures.test'),
  fromHelmert: require('./fromHelmert.test'),
  getScale: require('./getScale.test'),
  invert: require('./invert.test'),
  limitScale: require('./limitScale.test'),
  projectTo: require('./projectTo.test'),
  rotateBy: require('./rotateBy.test'),
  rotateTo: require('./rotateTo.test'),
  rotateToOrtho: require('./rotateToOrtho.test'),
  scaleBy: require('./scaleBy.test'),
  scaleTo: require('./scaleTo.test'),
  transform: require('./transform.test'),
  transformInside: require('./transformInside.test'),
  transitFrom: require('./transitFrom.test'),
  translateBy: require('./translateBy.test'),
  translateTo: require('./translateTo.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.plane2.' + unitName, units[unitName])
  })
}
