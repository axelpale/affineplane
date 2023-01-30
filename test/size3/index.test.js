// A unit for each method.
const units = {
  atNorm: require('./atNorm.test'),
  create: require('./create.test'),
  scaleBy: require('./scaleBy.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  validate: require('./validate.test'),
  volume: require('./volume.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.size3.' + unitName, units[unitName])
  })
}
