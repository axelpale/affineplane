// A unit for each method.
const units = {
  create: require('./create.test'),
  fromPoints: require('./fromPoints.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.point2.' + unitName, units[unitName])
  })
}
