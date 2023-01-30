module.exports = (vec) => {
  // @affineplane.helm3.fromBasisVector(vec)
  //
  // Create a linear transformation from the basis vector for x-axis.
  // This basis vector is limited to 2D and does not have z-component.
  // This uniquely determines the basis vector for y-axis, at
  // 90 degrees clock-wise, and consequently the z-axis according to the
  // right-hand rule.
  //
  // Parameters:
  //   vec
  //     a vec2, the basis vector for x-axis
  //     .. in the xy-plane of the reference basis.
  //
  // Return:
  //   a helm2z, but with zero translation.
  //
  return {
    a: vec.x,
    b: vec.y,
    x: 0,
    y: 0,
    z: 0
  }
}
