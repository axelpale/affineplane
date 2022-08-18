const inverse = require('../helm2/inverse')

module.exports = (point, plane) => {
  // Transit a point2 to a target plane.
  // In other words, represent the point2
  // in the coordinate system of the plane.
  //
  // Parameters:
  //   point
  //     a point2
  //   plane
  //     a plane2, the target plane
  //
  // Return:
  //   a point2, represented on the target plane.
  //

  // The plane is a mapping from itself to a target plane.
  // We need the projection from the target to the plane.
  const pr = inverse(plane)
  return {
    x: pr.a * point.x - pr.b * point.y + pr.x,
    y: pr.b * point.x + pr.a * point.y + pr.y
  }
}
