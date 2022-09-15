module.exports = function (vec, tr) {
  // affineplane.vec3.transformBy(vec, tr)
  //
  // Transform a vector. Translation does not affect the vector.
  //
  // Parameters
  //   vec
  //     a vec3
  //   tr
  //     a helm3
  //
  // Return
  //   a vec3, the transformed vector
  //
  return {
    x: tr.a * vec.x - tr.b * vec.y,
    y: tr.b * vec.x + tr.a * vec.y,
    z: vec.z
  }
}
