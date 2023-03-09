// A unit for each method.
const units = {
  collide: require('./collide.test'),
  create: require('./create.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.segment2.' + unitName, units[unitName])
  })
}
