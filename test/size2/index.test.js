// A unit for each method.
const units = {
  create: require('./create.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.size2.' + unitName, units[unitName])
  })
}
