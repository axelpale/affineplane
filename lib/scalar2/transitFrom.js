const getScale = require('../plane2/getScale')

module.exports = (scalar, source) => {
  // @affineplane.scalar2.transitFrom(scalar, source)
  //
  // Transit an area measure from the source basis
  // to the reference basis.
  //
  // Parameters:
  //   scalar
  //     a number, a scalar2 in the source basis.
  //   source
  //     a plane2 or plane3, the source basis, represented
  //     .. in the reference basis.
  //
  // Return:
  //   a number, the same scalar2 but represented in the reference basis.
  //
  const scale = getScale(source)
  return scalar * scale * scale
}
