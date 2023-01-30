module.exports = (v, m) => {
  // @affineplane.vec4.scaleBy(v, m)
  //
  // Scalar multiplication of a vector.
  //
  // Parameters:
  //   v
  //     a vec4
  //   m
  //     a number, a multiplier
  //
  // Return:
  //   a vec4
  //
  return {
    x: v.x * m,
    y: v.y * m,
    z: v.z * m,
    w: v.w * m
  }
}
