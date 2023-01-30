module.exports = (vec) => {
  // @affineplane.helm2.fromBasisVector(vec)
  //
  // Create a linear transformation from the basis vector for x-axis.
  // This uniquely determines the basis vector for y-axis, at
  // 90 degrees clock-wise.
  //
  // Parameters:
  //   vec
  //     a vec2, the basis vector for x-axis.
  //
  // Return:
  //   a helm2, but with zero translation.
  //
  return {
    a: vec.x,
    b: vec.y,
    x: 0,
    y: 0
  }
}
