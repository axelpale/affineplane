// A unit for each method.
const units = {
  addTranslation: require('./addTranslation.test'),
  almostEqual: require('./almostEqual.test'),
  compose: require('./compose.test'),
  copy: require('./copy.test'),
  create: require('./create.test'),
  det: require('./det.test'),
  equal: require('./equal.test'),
  fromArray: require('./fromArray.test'),
  fromFeats: require('./fromFeats.test'),
  getDilation: require('./getDilation.test'),
  getRotation: require('./getRotation.test'),
  getTranslation: require('./getTranslation.test'),
  inverse: require('./inverse.test'),
  projectToPlane: require('./projectToPlane.test'),
  rotateBy: require('./rotateBy.test'),
  setTranslation: require('./setTranslation.test'),
  toArray: require('./toArray.test'),
  toMatrix: require('./toMatrix.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.helm3.' + unitName, units[unitName])
  })
}
