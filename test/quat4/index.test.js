// A unit for each method.
const units = {
  conjugate: require('./conjugate.test'),
  difference: require('./difference.test'),
  fromVector: require('./fromVector.test'),
  hamilton: require('./hamilton.test'),
  norm: require('./norm.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.quat4.' + unitName, units[unitName])
  })
}
