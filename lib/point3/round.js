const round = Math.round

module.exports = (p) => {
  // @affineplane.point3.round(p)
  //
  // Move point to the closest integer coordinate.
  //
  // Parameters:
  //   p
  //     a point3
  //
  // Return
  //   a point3, having integer coordinates.
  //
  return {
    x: round(p.x),
    y: round(p.y),
    z: round(p.z)
  }
}
