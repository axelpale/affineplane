const create = require('../dir2/create')

module.exports = (pr, r) => {
  // affineplane.proj2.dir2(pr, r)
  // affineplane.proj2.direction(pr, r)
  //
  // Project a direction angle from a plane to another.
  //
  // Parameters:
  //   pr
  //     a proj2, a projection between planes
  //   r
  //     a number, a direction angle in radians
  //
  // Return
  //   a number, the equivalent direction on the target plane.
  //
  return create(r - Math.atan2(pr.b, pr.a))
}
