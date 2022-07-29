const proj = require('../proj2/vec2')

module.exports = (v, pr) => {
  // affineplane.vec2.project(v, pr)
  // Project a point from a plane to another.
  //
  // Parameters:
  //   v
  //     a vec2
  //   pr
  //     a proj2
  //
  // Return
  //   a vec2
  //
  return proj(pr, v)
}
