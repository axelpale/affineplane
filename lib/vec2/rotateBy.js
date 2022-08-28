module.exports = (v, radians) => {
  // affineplane.vec2.rotateBy(v, radians)
  //
  // Rotate vector by the given angle.
  //
  // Parameters
  //   v
  //     a vec2
  //   radians
  //     a number, from positive x-axis towards positive y-axis
  //
  // Return
  //   a vec2
  //
  const co = Math.cos(radians)
  const si = Math.sin(radians)

  return {
    x: v.x * co - v.y * si,
    y: v.x * si + v.y * co
  }
}
