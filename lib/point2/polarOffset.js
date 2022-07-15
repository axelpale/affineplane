module.exports = (p, distance, angle) => {
  // affineplane.point2.polarOffset(p, distance, angle)
  //
  // Create a point away from p at the given distance and angle.
  //
  // Parameters:
  //   p
  //     a point2
  //   distance
  //     a number, the distance from p.
  //   angle
  //     a number, the angle in radians
  //
  // Return
  //   a point2
  //
  return {
    x: p.x + distance * Math.cos(angle),
    y: p.y + distance * Math.sin(angle)
  }
}
