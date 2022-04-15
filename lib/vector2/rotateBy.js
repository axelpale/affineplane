module.exports = (v, radians) => {
  // Rotate vector by the given angle.
  //
  // Parameters
  //   v
  //     a vector2
  //   radians
  //     number, from positive x-axis towards positive y-axis
  //
  // Return
  //   a vector2
  //
  const co = Math.cos(radians)
  const si = Math.sin(radians)

  return {
    x: v.x * co - v.y * si,
    y: v.x * si + v.y * co
  }
}
