module.exports = (point, plane) => {
  // @affineplane.point3.transitFrom(point, plane)
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
  const pa = plane.a
  const pb = plane.b
  // Remember to scale z also.
  const m = Math.sqrt(pa * pa + pb * pb)
  return {
    x: pa * point.x - pb * point.y + plane.x,
    y: pb * point.x + pa * point.y + plane.y,
    z: m * point.z + plane.z
  }
}
