const transitFrom = require('../plane3/transitFrom')

module.exports = (rect, source) => {
  // affineplane.rect3.transitFrom(rect, source)
  //
  // Convert a rectangle from source basis to the reference basis.
  //
  // Parameters
  //   rect
  //     a rect3, a rectangle on the source basis.
  //   source
  //     a basis3, the source basis represented on the reference basis.
  //
  // Return
  //   a rect3, represented on the reference basis.
  //
  return {
    basis: transitFrom(rect.basis, source),
    size: rect.size
  }
}
