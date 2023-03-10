module.exports = (point, origin, ratio) => {
  // @affineplane.point3.homothety(point, origin, ratio)
  //
  // Perform a homothety about the origin point.
  //
  // Parameters:
  //   point
  //     a point3
  //   origin
  //     a point3
  //   ratio
  //     a number
  //
  // Return:
  //   a point3
  //
  return {
    x: (point.x - origin.x) * ratio + origin.x,
    y: (point.y - origin.y) * ratio + origin.y,
    z: (point.z - origin.z) * ratio + origin.z
  }
}
