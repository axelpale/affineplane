module.exports = (p, plane) => {
  // @affineplane.point3.distanceToPlane(p, plane)
  //
  // Euclidean distance between point and plane.
  //
  // Parameters
  //   p
  //     a point3
  //   plane
  //     a plane3
  //
  // Return
  //   a number, a scalar1, a dist3, a distance
  //

  // Assert plane3 is parallel to xy-plane

  return Math.abs(plane.z - p.z)
}
