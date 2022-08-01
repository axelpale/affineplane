module.exports = (v, w) => {
  // affineplane.vec3.inverse(v)
  // affineplane.vec3.invert
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
