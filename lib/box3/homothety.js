const pointHomothety = require('../point3/homothety')
const scaleSize = require('../size3/scaleBy')

module.exports = (box, origin, ratio) => {
  // @affineplane.box3.homothety(box, origin, ratio)
  // @affineplane.box3.scaleBy(box, origin, ratio)
  //
  // Perform homothety about an origin point. In other words, scale the box
  // about the fixed pivot point.
  //
  // Parameters:
  //   box
  //     a box3, the box to be scaled.
  //   origin
  //     a point3, the fixed pivot point.
  //   ratio
  //     a number, the scaling ratio.
  //
  // Return:
  //   a box3
  //

  // Scale component-wise
  const boxOrigin = pointHomothety(box, origin, ratio)
  const boxSize = scaleSize(box, ratio)

  // Build from size.
  // Preserve orientation.
  boxSize.a = box.a
  boxSize.b = box.b
  boxSize.x = boxOrigin.x
  boxSize.y = boxOrigin.y
  boxSize.z = boxOrigin.z

  return boxSize
}
