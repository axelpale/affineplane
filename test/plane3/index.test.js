// A unit for each method.
const units = {
  compose: require('./compose.test'),
  create: require('./create.test'),
  invert: require('./invert.test'),
  projectToPlane: require('./projectToPlane.test'),
  transform: require('./transform.test'),
  translateBy: require('./translateBy.test'),
  translateTo: require('./translateTo.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.plane3.' + unitName, units[unitName])
  })
}
