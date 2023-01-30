const getScale = require('../plane3/getScale')

module.exports = (dist, target) => {
  // @affineplane.dist3.transitTo(dist, target)
  //
  // Transit a dist3 to a target basis.
  // In other words, represent the distance
  // in the coordinate system of the basis.
  //
  // Parameters:
  //   dist
  //     a dist3 in the reference basis.
  //   target
  //     a plane3, the target basis, represented
  //     .. in the reference basis.
  //
  // Return:
  //   a dist3 in the target basis.
  //

  // On scale of 2, a length of 3 units becomes 1.5 units.
  // On a map 1:100, a length of 1 metre is 1 cm on paper.
  return dist / getScale(target)
}
