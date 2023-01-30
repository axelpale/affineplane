module.exports = (v, w) => {
  // @affineplane.vec3.cross(v, w)
  //
  // The cross product of two 3D vectors. Returns a vector perpendicular
  // to the given vectors. In other words, the result will be normal
  // to the plane span by the given vectors.
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
    x: v.y * w.z - v.z * w.y,
    y: v.z * w.x - v.x * w.z,
    z: v.x * w.y - v.y * w.x
  }
}
