module.exports = function (p, origin, radians) {
  // Rotate point about the given center.
  //
  // Parameters
  //   p
  //     point2
  //   origin
  //     point2, a point around to rotate
  //   radians
  //     number, angle in radians
  //
  // Return
  //   point2
  //

  // Put relative to origin
  const x = p.x - origin.x
  const y = p.y - origin.y
  // Rotate
  const xx = x * Math.cos(radians) - y * Math.sin(radians)
  const yy = x * Math.sin(radians) + y * Math.cos(radians)
  // Put back relative to origin and return
  return {
    x: xx + origin.x,
    y: yy + origin.y
  }
}
