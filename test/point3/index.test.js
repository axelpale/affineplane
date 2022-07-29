// A unit for each method.
const units = {
  average: require('./average.test'),
  copy: require('./copy.test'),
  difference: require('./difference.test'),
  distance: require('./distance.test'),
  equal: require('./equal.test'),
  fromArray: require('./fromArray.test'),
  offset: require('./offset.test'),
  polarOffset: require('./polarOffset.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.point3.' + unitName, units[unitName])
  })
}
