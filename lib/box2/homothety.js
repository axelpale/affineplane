const scalePlane = require('../plane2/scaleBy')
const scaleSize = require('../size2/scaleBy')

module.exports = (box, center, ratio) => {
  // affineplane.box2.homothety(box, center, ratio)
  // affineplane.box2.scaleBy(box, center, ratio)
  //
  // Perform homothety about the center. In other words, scale the box
  // about the fixed center point.
  //
  // Parameters:
  //   box
  //     a box2, the box to be scaled.
  //   center
  //     a point2, the fixed pivot point.
  //   ratio
  //     a number, the scaling ratio.
  //
  // Return:
  //   a box2
  //

  // Scale component-wise
  const boxPlane = scalePlane(box, center, ratio)
  const boxSize = scaleSize(box, ratio)

  // Patch size
  boxPlane.w = boxSize.w
  boxPlane.h = boxSize.h

  return boxPlane
}
