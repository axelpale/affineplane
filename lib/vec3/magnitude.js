module.exports = (v) => {
  // affineplane.vec3.magnitude(v)
  // The euclidean length of the vector.
  //
  // Parameters
  //   v
  //     a vec3
  //
  // Return
  //   a number
  //
  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z)
}
