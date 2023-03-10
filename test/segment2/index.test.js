// A unit for each method.
const units = {
  collide: require('./collide.test'),
  create: require('./create.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.segment2.' + unitName, units[unitName])
  })
}
