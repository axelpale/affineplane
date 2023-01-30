module.exports = (vec) => {
  // @affineplane.quat4.fromVector(vec)
  //
  // Construct a vector quaternion i.e. a quaternion with zero scalar part.
  //
  // Parameters:
  //   vec
  //     a vec3
  //
  // Return
  //   a quat4
  //
  return {
    a: 0,
    b: vec.x,
    c: vec.y,
    d: vec.z
  }
}
