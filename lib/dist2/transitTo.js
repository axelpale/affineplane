const getScale = require('../plane2/getScale')

module.exports = (dist, target) => {
  // affineplane.dist2.transitTo(dist, target)
  //
  // Transit a dist2 to another basis.
  // In other words, represent the distance
  // in the coordinate system of the target.
  //
  // Parameters:
  //   dist
  //     a number, a dist2 in the reference basis.
  //   target
  //     a plane2, the target basis, represented
  //     .. in the reference basis.
  //
  // Return:
  //   a number, a dist2 in the target basis.
  //

  // On scale of 2, a length of 3 units becomes 1.5 units.
  // On a map 1:100, a length of 1 metre is 1 cm on paper.
  return dist / getScale(target)
}
