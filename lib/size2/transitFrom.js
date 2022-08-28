const getScale = require('../plane2/getScale')

module.exports = (size, source) => {
  // affineplane.size2.transitFrom(size, source)
  //
  // Transit a size from the source plane
  // to the reference plane.
  //
  // Parameters:
  //   size
  //     a size2 on the source plane.
  //   source
  //     a plane2, the source plane, represented
  //     .. on the reference plane.
  //
  // Return:
  //   a size2, represented on the reference plane.
  //
  const scale = getScale(source)

  return {
    w: size.w * scale,
    h: size.h * scale
  }
}
