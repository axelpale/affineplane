module.exports = (point, origin, ratio) => {
  // @affineplane.point2.homothety(point, origin, ratio)
  //
  // Perform homothety about the origin point.
  //
  // Parameters:
  //   point
  //     a point2
  //   origin
  //     a point2, the pivot point
  //   ratio
  //     a number, the scaling ratio
  //
  // Return:
  //   a point2
  //
  return {
    x: (point.x - origin.x) * ratio + origin.x,
    y: (point.y - origin.y) * ratio + origin.y
  }
}
