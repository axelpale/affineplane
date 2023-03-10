// A unit for each method.
const units = {
  combine: require('./combine.test'),
  create: require('./create.test'),
  projectToPlane: require('./projectToPlane.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.path3.' + unitName, units[unitName])
  })
}
