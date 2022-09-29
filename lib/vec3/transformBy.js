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
  const ta = tr.a
  const tb = tr.b
  const tm = Math.sqrt(ta * ta + tb * tb)
  return {
    x: ta * vec.x - tb * vec.y,
    y: tb * vec.x + ta * vec.y,
    z: tm * vec.z
  }
}
