module.exports = (v) => {
  // @affineplane.vec3.invert(v)
  // @affineplane.vec3.negate
  //
  // Get the vector -v.
  //
  // Parameters:
  //   v
  //     a vec3
  //
  // Return
  //   a vec3
  //
  return {
    x: -v.x,
    y: -v.y,
    z: -v.z
  }
}
