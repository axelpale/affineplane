// A unit for each method.
const units = {
  projectToPlane: require('./projectToPlane.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.plane3.' + unitName, units[unitName])
  })
}
