// A unit for each method.
const units = {
  addDilation: require('./addDilation.test'),
  addRotation: require('./addRotation.test'),
  addTranslation: require('./addTranslation.test'),
  almostEqual: require('./almostEqual.test'),
  copy: require('./copy.test'),
  create: require('./create.test'),
  fromArray: require('./fromArray.test'),
  fromBasisVector: require('./fromBasisVector.test'),
  fromFeatures: require('./fromFeatures.test'),
  fromPlane: require('./fromPlane.test'),
  fromPolar: require('./fromPolar.test'),
  fromVector: require('./fromVector.test'),
  equal: require('./equal.test'),
  getRotation: require('./getRotation.test'),
  getDilation: require('./getDilation.test'),
  getTranslation: require('./getTranslation.test'),
  inverse: require('./inverse.test'),
  multiply: require('./multiply.test'),
  projectTo: require('./projectTo.test'),
  rotateBy: require('./rotateBy.test'),
  scaleBy: require('./scaleBy.test'),
  setDilation: require('./setDilation.test'),
  setRotation: require('./setRotation.test'),
  setTranslation: require('./setTranslation.test'),
  snapRotation: require('./snapRotation.test'),
  toArray: require('./toArray.test'),
  toMatrix: require('./toMatrix.test'),
  toString: require('./toString.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.helm2.' + unitName, units[unitName])
  })
}
