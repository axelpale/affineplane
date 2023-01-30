module.exports = (v) => {
  // @affineplane.vec4.norm(v)
  //
  // The length of 4D vector. Also called the norm.
  //
  // Parameters:
  //   v
  //     a vec4
  //
  // Return
  //   a number
  //
  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z + v.w * v.w)
}
