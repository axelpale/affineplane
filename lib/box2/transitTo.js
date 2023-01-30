const invert = require('../plane2/invert')
const transitOrientationFrom = require('../orient2/transitFrom')
const transitPointFrom = require('../point2/transitFrom')
const transitSizeFrom = require('../size2/transitFrom')

module.exports = (box, target) => {
  // @affineplane.box2.transitTo(box, target)
  //
  // Convert a box from the reference basis to the target basis.
  //
  // Parameters
  //   box
  //     a box2, a rectangle in the reference basis.
  //   target
  //     a plane2, the target basis represented in the reference basis.
  //
  // Return
  //   a box2, represented in the target basis.
  //

  // Invert only once here and use a bit more efficient transitFrom.
  const itarget = invert(target)
  const boxOrient = transitOrientationFrom(box, itarget)
  const boxOrigin = transitPointFrom(box, itarget)
  const boxSize = transitSizeFrom(box, itarget)

  // Build the box by patching orientation with origin and size
  boxOrient.x = boxOrigin.x
  boxOrient.y = boxOrigin.y
  boxOrient.w = boxSize.w
  boxOrient.h = boxSize.h

  return boxOrient
}
