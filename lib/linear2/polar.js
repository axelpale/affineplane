module.exports = (scale, rotation) => {
  // affineplane.linear2.polar(scale, rotation)
  //
  // Create a linear transformation from scale and rotation.
  // See also affineplane.vec2.fromPolar.
  //
  // Parameters
  //   scale
  //     a number, multiplier
  //   rotation
  //     a number, angle in radians
  //
  // Return
  //   linear2
  //
  return {
    a: scale * Math.cos(rotation),
    b: scale * Math.sin(rotation)
  }
}
