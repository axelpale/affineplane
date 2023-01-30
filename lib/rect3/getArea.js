const getScale = require('../plane3/getScale')

module.exports = (rect) => {
  // @affineplane.rect2.getArea(rect)
  //
  // Compute rectangle area. This returns the area on the reference basis.
  //
  // Parameters
  //   rect
  //     a rect2, on the reference basis.
  //
  // Return
  //   a number, the area on the reference basis.
  //

  // Area in inner basis
  const la = rect.size.w * rect.size.h
  // Dilation
  const scale = getScale(rect.basis)
  // Squared scale because area
  return la * scale * scale
}
