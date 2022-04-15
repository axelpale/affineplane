module.exports = (v, radians) => {
  // Rotate vector so that it points to the given angle.
  //
  // Parameters
  //   v
  //     a vector2
  //   radians
  //     a number from positive x-axis towards positive y-axis
  //
  // Return
  //   a vector2
  //
  const magnitude = Math.sqrt(v.x * v.x + v.y * v.y)
  return {
    x: magnitude * Math.cos(radians),
    y: magnitude * Math.sin(radians)
  }
}
