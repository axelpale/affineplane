module.exports = (v, w) => {
  // affineplane.vec3.dot(v, w)
  //
  // Dot product of two vectors,
  // also called the scalar product.
  //
  // Parameters:
  //   v
  //     a vec3
  //   w
  //     a vec3
  //
  // Return
  //   a number
  //
  return v.x * w.x + v.y * w.y + v.z * w.z
}
