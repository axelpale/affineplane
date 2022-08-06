// A unit for each method.
const units = {
  compose: require('./compose.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.ortho3.' + unitName, units[unitName])
  })
}
