module.exports = (v, w) => {
  // affineplane.vec3.difference(v, w)
  // affineplane.vec3.diff(v, w)
  //
  // Get the vector w - v. In other words, if we place v, w
  // to begin from the same point then the result is a vector
  // from the end of v to the end of w.
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
    x: w.x - v.x,
    y: w.y - v.y,
    z: w.z - v.z
  }
}
