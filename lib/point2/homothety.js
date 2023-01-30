module.exports = (point, center, ratio) => {
  // @affineplane.point2.homothety(point, center, ratio)
  //
  // Perform homothety about the center.
  //
  // Parameters:
  //   point
  //     a point2
  //   center
  //     a point2
  //   ratio
  //     a number, the scaling ratio
  //
  // Return:
  //   a point2
  //
  return {
    x: (point.x - center.x) * ratio + center.x,
    y: (point.y - center.y) * ratio + center.y
  }
}
