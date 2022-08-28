module.exports = (point, center, ratio) => {
  // Perform a homothety about the center.
  //
  // Parameters:
  //   point
  //     a point3
  //   center
  //     a point3
  //   ratio
  //     a number
  //
  // Return:
  //   a point3
  //
  return {
    x: (point.x - center.x) * ratio + center.x,
    y: (point.y - center.y) * ratio + center.y,
    z: (point.z - center.z) * ratio + center.z
  }
}
