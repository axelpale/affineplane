const pointHomothety = require('../point2/homothety')
const scaleSize = require('../size2/scaleBy')

module.exports = (box, origin, ratio) => {
  // @affineplane.box2.homothety(box, origin, ratio)
  // @affineplane.box2.scaleBy(box, origin, ratio)
  //
  // Perform homothety about the origin. In other words, scale the box
  // about the fixed pivot point.
  //
  // Parameters:
  //   box
  //     a box2, the box to be scaled.
  //   origin
  //     a point2, the fixed origin point.
  //   ratio
  //     a number, the scaling ratio.
  //
  // Return:
  //   a box2
  //

  // Scale component-wise
  const boxOrigin = pointHomothety(box, origin, ratio)
  const boxSize = scaleSize(box, ratio)

  // Patch size.
  // Preserve orientation.
  boxSize.a = box.a
  boxSize.b = box.b
  boxSize.x = boxOrigin.x
  boxSize.y = boxOrigin.y

  return boxSize
}
