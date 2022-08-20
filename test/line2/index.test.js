// A unit for each method.
const units = {
  at: require('./at.test'),
  create: require('./create.test'),
  fromPoints: require('./fromPoints.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.line2.' + unitName, units[unitName])
  })
}
