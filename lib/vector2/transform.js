module.exports = function (vec, tr) {
  // Transform a vector. Translation does not affect the vector.
  //
  // Parameters
  //   vec
  //     a vector2
  //   tr
  //     a tran2
  //
  // Return
  //   a vector2, the transformed vector
  //
  return {
    x: tr.a * vec.x - tr.b * vec.y,
    y: tr.b * vec.x + tr.a * vec.y
  }
}
