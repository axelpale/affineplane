const getScale = require('../plane2/getScale')

module.exports = (scalar, target) => {
  // @affineplane.scalar1.transitTo(scalar, target)
  //
  // Transit a scalar to another basis.
  // In other words, represent the scalar
  // in the coordinate system of the target.
  //
  // Parameters:
  //   scalar
  //     a number, a scalar1 in the reference basis.
  //   target
  //     a plane2, the target basis, represented
  //     .. in the reference basis.
  //
  // Return:
  //   a number, a scalar1 in the target basis.
  //

  // On scale of 2, a length of 3 units becomes 1.5 units.
  // On a map 1:100, a length of 1 metre is 1 cm on paper.
  return scalar / getScale(target)
}
