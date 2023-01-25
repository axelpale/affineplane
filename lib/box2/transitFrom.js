const transitPlaneFrom = require('../plane2/transitFrom')
const transitSizeFrom = require('../size2/transitFrom')

module.exports = (box, source) => {
  // affineplane.box2.transitFrom(box, source)
  //
  // Convert a box from source basis to the reference basis.
  //
  // Parameters
  //   box
  //     a box2, a box in the source basis.
  //   source
  //     a plane2, the source basis represented in the reference basis.
  //
  // Return
  //   a box2, represented in the reference basis.
  //

  // Piece-wise transit
  const boxPlane = transitPlaneFrom(box, source)
  const boxSize = transitSizeFrom(box, source)

  // Patch plane to a box.
  boxPlane.w = boxSize.w
  boxPlane.h = boxSize.h

  return boxPlane
}
