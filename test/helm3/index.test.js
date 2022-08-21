// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test'),
  compose: require('./compose.test'),
  copy: require('./copy.test'),
  create: require('./create.test'),
  det: require('./det.test'),
  equal: require('./equal.test'),
  fromArray: require('./fromArray.test'),
  fromFeats: require('./fromFeats.test'),
  inverse: require('./inverse.test'),
  toArray: require('./toArray.test'),
  toMatrix: require('./toMatrix.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  translateBy: require('./translateBy.test'),
  translateTo: require('./translateTo.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.helm3.' + unitName, units[unitName])
  })
}
