const invert = require('../plane2/invert')
const transitPlaneFrom = require('../plane2/transitFrom')
const transitSizeFrom = require('../size2/transitFrom')

module.exports = (box, target) => {
  // affineplane.box2.transitTo(box, target)
  //
  // Convert a box from the reference basis to the target basis.
  //
  // Parameters
  //   box
  //     a rectangle on the reference basis.
  //   target
  //     a plane2, the target basis represented in the reference basis.
  //
  // Return
  //   a box2, represented in the target basis.
  //

  // Invert only once here and use a bit more efficient transitFrom.
  const itarget = invert(target)
  const boxPlane = transitPlaneFrom(box, itarget)
  const boxSize = transitSizeFrom(box, itarget)

  // Patch plane to a box
  boxPlane.w = boxSize.w
  boxPlane.h = boxSize.h

  return boxPlane
}
