const proj = require('../proj2/vector2')

module.exports = (v, pr) => {
  // affineplane.vector2.project(v, pr)
  // Project a point from a plane to another.
  //
  // Parameters:
  //   v
  //     a vector2
  //   pr
  //     a proj2
  //
  // Return
  //   a vector2
  //
  return proj(pr, v)
}
