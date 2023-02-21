// A unit for each method.
const units = {
  addDilation: require('./addDilation.test'),
  addRotation: require('./addRotation.test'),
  addTranslation: require('./addTranslation.test'),
  almostEqual: require('./almostEqual.test'),
  compose: require('./compose.test'),
  copy: require('./copy.test'),
  create: require('./create.test'),
  det: require('./det.test'),
  equal: require('./equal.test'),
  fromArray: require('./fromArray.test'),
  fromBasisVector: require('./fromBasisVector.test'),
  fromFeatures: require('./fromFeatures.test'),
  fromPlane: require('./fromPlane.test'),
  fromVector: require('./fromVector.test'),
  getDilation: require('./getDilation.test'),
  getRotation: require('./getRotation.test'),
  getTranslation: require('./getTranslation.test'),
  inverse: require('./inverse.test'),
  limitDilation: require('./limitDilation.test'),
  projectToPlane: require('./projectToPlane.test'),
  rotateBy: require('./rotateBy.test'),
  scaleBy: require('./scaleBy.test'),
  setDilation: require('./setDilation.test'),
  setRotation: require('./setRotation.test'),
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
