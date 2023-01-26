// A unit for each method.
const units = {
  create: require('./create.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.rot2.' + unitName, units[unitName])
  })
}
