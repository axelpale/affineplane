// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test'),
  boundaries: require('./boundaries.test'),
  copy: require('./copy.test'),
  measures: require('./measures.test'),
  positions: require('./positions.test'),
  transformations: require('./transformations.test'),
  transitions: require('./transitions.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.circle3.' + unitName, units[unitName])
  })
}
