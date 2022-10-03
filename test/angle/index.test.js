// A unit for each method.
const units = {
  modulo: require('./modulo.test'),
  degToRad: require('./degToRad.test'),
  radToDeg: require('./radToDeg.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.angle.' + unitName, units[unitName])
  })
}
