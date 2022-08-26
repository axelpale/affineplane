
module.exports = (point, plane) => {
  // affineplane.point2.transitFrom(point, plane)
  //
  // Transit a point2 from the source plane
  // to the reference plane.
  //
  // Parameters:
  //   point
  //     a point2 on the source plane.
  //   plane
  //     a plane2, the source plane, represented
  //     on the reference plane.
  //
  // Return:
  //   a point2, represented on the target plane.
  //
  return {
    x: plane.a * point.x - plane.b * point.y + plane.x,
    y: plane.b * point.x + plane.a * point.y + plane.y
  }
}
