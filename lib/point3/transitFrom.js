module.exports = (point, plane) => {
  // affineplane.point3.transitFrom(point, plane)
  //
  // Represent the point on the reference plane
  // without losing information.
  //
  // Parameters:
  //   point
  //     a point3 on the source plane.
  //   plane
  //     a plane3 on the reference plane.
  //    .. The source plane.
  //
  // Return:
  //   a point3, represented on the reference plane.
  //

  // The plane is a mapping from itself to the reference plane.
  return {
    x: plane.a * point.x - plane.b * point.y + plane.x,
    y: plane.b * point.x + plane.a * point.y + plane.y,
    z: point.z + plane.z
  }
}
