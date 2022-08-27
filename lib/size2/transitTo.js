const getScale = require('../plane2/getScale')

module.exports = (size, target) => {
  // affineplane.size2.transitTo(size, target)
  //
  // Transit a size2 to a target plane.
  // In other words, represent the size
  // in the coordinate system of the target plane.
  //
  // Parameters:
  //   size
  //     a size2 on the reference plane.
  //   target
  //     a plane2, the target plane, represented
  //     on the reference plane.
  //
  // Return:
  //   a size2 on the target plane.
  //

  // On scale of 2, a length of 3 units becomes 1.5 units.
  // On a map 1:100, a length of 1 metre is 1 cm on paper.
  const scale = getScale(target)

  if (scale === 0) {
    throw new Error('Cannot transit to a singular plane.')
  }

  return {
    w: size.w / scale,
    h: size.h / scale
  }
}
