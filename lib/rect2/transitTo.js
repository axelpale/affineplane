const transitTo = require('../plane2/transitTo')

module.exports = (rect, target) => {
  // @affineplane.rect2.transitTo(rect, target)
  //
  // Convert a rectangle from the reference basis to the target basis.
  //
  // Parameters
  //   rect
  //     a rectangle on the reference basis.
  //   target
  //     a plane2, the target basis represented on the reference basis.
  //
  // Return
  //   a rect2, represented on the target basis.
  //
  return {
    basis: transitTo(rect.basis, target),
    size: rect.size
  }
}
