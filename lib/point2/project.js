const proj = require('../proj2/point2')

module.exports = (p, pr) => {
  // Project a point from a plane to another.
  //
  // Parameters:
  //   p
  //     a point2
  //   pr
  //     a proj2
  //
  // Return
  //   a point2
  //
  return proj(pr, p)
}
