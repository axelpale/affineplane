module.exports = (v, radians) => {
  // affineplane.vec2.rotateTo(v, radians)
  // Rotate vector so that it points to the given angle.
  //
  // Parameters
  //   v
  //     a vec2
  //   radians
  //     a number from positive x-axis towards positive y-axis
  //
  // Return
  //   a vec2
  //
  const magnitude = Math.sqrt(v.x * v.x + v.y * v.y)
  return {
    x: magnitude * Math.cos(radians),
    y: magnitude * Math.sin(radians)
  }
}
