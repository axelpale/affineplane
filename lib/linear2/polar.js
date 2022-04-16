module.exports = (scale, rotation) => {
  // Create a linear transformation from scale and rotation.
  // See also vector2.polar(magnitude, direction)
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
