
module.exports = (point, source) => {
  // affineplane.point2.transitFrom(point, plane)
  //
  // Transit a point2 from the source plane
  // to the reference plane.
  //
  // Parameters:
  //   point
  //     a point2 on the source plane.
  //   source
  //     a plane2, the source plane, represented
  //     .. on the reference plane.
  //
  // Return:
  //   a point2, represented on the reference plane.
  //
  return {
    x: source.a * point.x - source.b * point.y + source.x,
    y: source.b * point.x + source.a * point.y + source.y
  }
}
