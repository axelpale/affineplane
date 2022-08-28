const getScale = require('../plane2/getScale')

module.exports = (dist, target) => {
  // affineplane.dist2.transitTo(dist, target)
  //
  // Transit a dist2 to a target plane.
  // In other words, represent the distance
  // in the coordinate system of the plane.
  //
  // Parameters:
  //   dist
  //     a number, a dist2 on the reference plane.
  //   target
  //     a plane2, the target plane, represented
  //     .. on the reference plane.
  //
  // Return:
  //   a number, a dist2 on the target plane.
  //

  // On scale of 2, a length of 3 units becomes 1.5 units.
  // On a map 1:100, a length of 1 metre is 1 cm on paper.
  return dist / getScale(target)
}
