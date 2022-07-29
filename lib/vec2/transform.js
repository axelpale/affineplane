module.exports = function (vec, tr) {
  // affineplane.vec2.transform(vec, tr)
  // Transform a vector. Translation does not affect the vector.
  //
  // Parameters
  //   vec
  //     a vec2
  //   tr
  //     a helm2
  //
  // Return
  //   a vec2, the transformed vector
  //
  return {
    x: tr.a * vec.x - tr.b * vec.y,
    y: tr.b * vec.x + tr.a * vec.y
  }
}
