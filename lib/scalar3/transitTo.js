const getScale = require('../plane2/getScale')

module.exports = (scalar, target) => {
  // @affineplane.scalar3.transitTo(scalar, target)
  //
  // Transit a volume measurement to another basis.
  // In other words, represent a third-order scalar
  // in the coordinate system of the target.
  //
  // Parameters:
  //   scalar
  //     a number, a scalar3 in the reference basis.
  //   target
  //     a plane2 or plane3, the target basis, represented
  //     .. in the reference basis.
  //
  // Return:
  //   a number, a scalar3 in the target basis.
  //

  const scale = getScale(target)
  return scalar / (scale * scale * scale)
}
