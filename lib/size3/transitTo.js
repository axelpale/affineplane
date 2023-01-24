const getScale = require('../plane3/getScale')

module.exports = (size, target) => {
  // affineplane.size3.transitTo(size, target)
  //
  // Transit a size3 to a target basis.
  // In other words, represent the size
  // in the coordinate system of the target.
  //
  // Parameters:
  //   size
  //     a size3 on the reference basis.
  //   target
  //     a plane3, the target basis, represented
  //     .. on the reference basis.
  //
  // Return:
  //   a size3 on the target basis.
  //

  // On scale of 2, a length of 3 units becomes 1.5 units.
  // On a map 1:100, a length of 1 metre is 1 cm on paper.
  const scale = getScale(target)

  if (scale === 0) {
    throw new Error('Cannot transit to a singular basis.')
  }

  return {
    w: size.w / scale,
    h: size.h / scale,
    d: size.d / scale
  }
}
