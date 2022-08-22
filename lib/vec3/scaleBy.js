module.exports = (vec, multiplier) => {
  // Scale the vector by a multiplier.
  // The direction of the vector does not change.
  //
  // Parameters:
  //   vec
  //     a vec3
  //   multiplier
  //     a number
  //
  // Return
  //   a vec3
  //
  return {
    x: vec.x * multiplier,
    y: vec.y * multiplier,
    z: vec.z * multiplier
  }
}
