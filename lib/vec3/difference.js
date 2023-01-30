module.exports = (v, w) => {
  // @affineplane.vec3.difference(v, w)
  // @affineplane.vec3.diff(v, w)
  // @affineplane.vec3.subtract
  //
  // Get the vector v - w. In other words, if we place v, w
  // to begin from the same point then the result is a vector
  // from the end of w to the end of v.
  //
  // Parameters:
  //   v
  //     a vec3
  //   w
  //     a vec3
  //
  // Return
  //   a vec3
  //
  return {
    x: v.x - w.x,
    y: v.y - w.y,
    z: v.z - w.z
  }
}
