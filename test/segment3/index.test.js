// A unit for each method.
const units = {
  create: require('./create.test'),
  transitions: require('./transitions.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.segment3.' + unitName, units[unitName])
  })
}
