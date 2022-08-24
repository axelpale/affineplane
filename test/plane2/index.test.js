// A unit for each method.
const units = {
  create: require('./create.test'),
  invert: require('./invert.test'),
  projectToPlane: require('./projectToPlane.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.plane2.' + unitName, units[unitName])
  })
}
