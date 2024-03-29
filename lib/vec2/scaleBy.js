module.exports = (vec, multiplier) => {
  // @affineplane.vec2.scaleBy(vec, multiplier)
  //
  // The scalar multiplication of a vector.
  // Scale the vector by a multiplier.
  // The direction of the vector does not change.
  //
  // Parameters:
  //   vec
  //     a vec2
  //   multiplier
  //     a number
  //
  // Return
  //   a vec2
  //
  return {
    x: vec.x * multiplier,
    y: vec.y * multiplier
  }
}
