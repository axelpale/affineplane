const transitTo = require('../plane3/transitTo')

module.exports = (rect, target) => {
  // affineplane.rect3.transitTo(rect, target)
  //
  // Convert a rectangle from the reference basis to the target basis.
  //
  // Parameters
  //   rect
  //     a rectangle on the reference basis.
  //   target
  //     a basis3, the target basis represented on the reference basis.
  //
  // Return
  //   a rect3, represented on the target basis.
  //
  return {
    basis: transitTo(rect.basis, target),
    size: rect.size
  }
}
