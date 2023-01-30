const transitFrom = require('../plane2/transitFrom')

module.exports = (rect, source) => {
  // @affineplane.rect2.transitFrom(rect, source)
  //
  // Convert a rectangle from source basis to the reference basis.
  //
  // Parameters
  //   rect
  //     a rect2, a rectangle on the source basis.
  //   source
  //     a plane2, the source basis represented on the reference basis.
  //
  // Return
  //   a rect2, represented on the reference basis.
  //
  return {
    basis: transitFrom(rect.basis, source),
    size: rect.size
  }
}
