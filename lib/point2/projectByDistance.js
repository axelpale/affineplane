const EPSILON = require('../epsilon')

module.exports = (point, origin, distance) => {
  // @affineplane.point2.projectByDistance(point, origin, distance)
  //
  // Perform homothety about the origin point so that the point translates
  // by the given distance. If the point and origin are the same point,
  // no translation will occur and the original point is returned.
  //
  // Parameters:
  //   point
  //     a point2
  //   origin
  //     a point2, the pivot point
  //   distance
  //     a number, can be negative.
  //
  // Return:
  //   a point2
  //
  const dx = point.x - origin.x
  const dy = point.y - origin.y
  const d = Math.sqrt(dx * dx + dy * dy)

  if (d < EPSILON) {
    // Probably point and origin are the same.
    // Cannot know where to project.
    return point
  }

  const ratio = (d + distance) / d
  return {
    x: dx * ratio + origin.x,
    y: dy * ratio + origin.y
  }
}
