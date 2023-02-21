const getScale = require('../plane2/getScale')

module.exports = (scalar, target) => {
  // @affineplane.scalar2.transitTo(scalar, target)
  //
  // Transit an area measurement to another basis.
  // In other words, represent a second order scalar
  // in the coordinate system of the target.
  //
  // Parameters:
  //   scalar
  //     a number, a scalar2 in the reference basis.
  //   target
  //     a plane2 or plane3, the target basis, represented
  //     .. in the reference basis.
  //
  // Return:
  //   a number, a scalar2 in the target basis.
  //

  // On scale of 2, an area of 4 units becomes 1 unit.
  // On a map 1:100, an area of 1 squaremeter is 1 squarecentimeter on paper,
  // thus 1:10000 of the original area.
  const scale = getScale(target)
  return scalar / (scale * scale)
}
