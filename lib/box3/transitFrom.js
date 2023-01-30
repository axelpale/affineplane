const transitOrientationFrom = require('../orient2/transitFrom')
const transitPointFrom = require('../point3/transitFrom')
const transitSizeFrom = require('../size3/transitFrom')

module.exports = (box, source) => {
  // @affineplane.box3.transitFrom(box, source)
  //
  // Convert a box from source basis to the reference basis.
  //
  // Parameters
  //   box
  //     a box3, a cuboid in the source basis.
  //   source
  //     a plane3, the source basis represented in the reference basis.
  //
  // Return
  //   a box3, represented in the reference basis.
  //

  // Piece-wise transit
  const boxOrient = transitOrientationFrom(box, source)
  const boxOrigin = transitPointFrom(box, source)
  const boxSize = transitSizeFrom(box, source)

  // Build the box by patching orientation with origin and size
  boxOrient.x = boxOrigin.x
  boxOrient.y = boxOrigin.y
  boxOrient.z = boxOrigin.z
  boxOrient.w = boxSize.w
  boxOrient.h = boxSize.h
  boxOrient.d = boxSize.d

  return boxOrient
}
