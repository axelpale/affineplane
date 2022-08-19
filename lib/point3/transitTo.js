const invert = require('../helm3/inverse')

module.exports = (point, plane) => {
  // Represent the point on the target plane
  // without losing information.
  //
  // Parameters:
  //   point
  //     a point3 on the reference plane.
  //   plane
  //     a plane3 on the reference plane.
  //    .. The target plane.
  //
  // Return:
  //   a point3, represented on the target plane.
  //

  // The plane is a mapping from itself to a target plane.
  // We need the projection from the target to the plane.
  const iplane = invert(plane)
  return {
    x: iplane.a * point.x - iplane.b * point.y + iplane.x,
    y: iplane.b * point.x + iplane.a * point.y + iplane.y,
    z: point.z + iplane.z
  }
}
