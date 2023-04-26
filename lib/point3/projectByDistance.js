const EPSILON = require('../epsilon')

module.exports = (point, origin, distance) => {
  // @affineplane.point3.projectByDistance(point, origin, distance)
  //
  // Perform homothety about the origin point so that the point translates
  // by the given distance. If the point and origin are the same point,
  // no translation will occur and the original point is returned.
  //
  // Parameters:
  //   point
  //     a point3
  //   origin
  //     a point3, the pivot point
  //   distance
  //     a number, can be negative.
  //
  // Return:
  //   a point3
  //
  const dx = point.x - origin.x
  const dy = point.y - origin.y
  const dz = point.z - origin.z
  const d = Math.sqrt(dx * dx + dy * dy + dz * dz)

  if (d < EPSILON) {
    // Probably point and origin are the same.
    // Cannot know where to project.
    return point
  }

  const ratio = 1 + distance / d

  return {
    x: dx * ratio + origin.x,
    y: dy * ratio + origin.y,
    z: dz * ratio + origin.z
  }
}
