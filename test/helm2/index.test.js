// A unit for each method.
const units = {
  addDilation: require('./addDilation.test'),
  addRotation: require('./addRotation.test'),
  almostEqual: require('./almostEqual.test'),
  copy: require('./copy.test'),
  create: require('./create.test'),
  fromArray: require('./fromArray.test'),
  fromPolar: require('./fromPolar.test'),
  equal: require('./equal.test'),
  getRotation: require('./getRotation.test'),
  getDilation: require('./getDilation.test'),
  getTranslation: require('./getTranslation.test'),
  inverse: require('./inverse.test'),
  multiply: require('./multiply.test'),
  projectToPlane: require('./projectToPlane.test'),
  rotateBy: require('./rotateBy.test'),
  scaleBy: require('./scaleBy.test'),
  setDilation: require('./setDilation.test'),
  setRotation: require('./setRotation.test'),
  setTranslation: require('./setTranslation.test'),
  toArray: require('./toArray.test'),
  toMatrix: require('./toMatrix.test'),
  toString: require('./toString.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  translateBy: require('./translateBy.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.helm2.' + unitName, units[unitName])
  })
}
