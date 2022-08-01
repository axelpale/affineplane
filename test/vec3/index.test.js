// A unit for each method.
const units = {
  fromPolar: require('./fromPolar.test'),
  inverse: require('./inverse.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.vec3.' + unitName, units[unitName])
  })
}
