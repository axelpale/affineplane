const transitOrientationFrom = require('../orient2/transitFrom')
const transitPointFrom = require('../point2/transitFrom')
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
  const boxOrient = transitOrientationFrom(box, source)
  const boxOrigin = transitPointFrom(box, source)
  const boxSize = transitSizeFrom(box, source)

  // Patch orientation with origin and size
  boxOrient.x = boxOrigin.x
  boxOrient.y = boxOrigin.y
  boxOrient.w = boxSize.w
  boxOrient.h = boxSize.h

  return boxOrient
}
