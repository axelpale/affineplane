const getScale = require('../plane3/getScale')

module.exports = (size, source) => {
  // @affineplane.size3.transitFrom(size, source)
  //
  // Transit a size from the source basis
  // to the reference basis.
  //
  // Parameters:
  //   size
  //     a size3 on the source basis.
  //   source
  //     a plane3, the source basis, represented
  //     .. on the reference basis.
  //
  // Return:
  //   a size3, represented on the reference basis.
  //
  const scale = getScale(source)

  return {
    w: size.w * scale,
    h: size.h * scale,
    d: size.d * scale
  }
}
