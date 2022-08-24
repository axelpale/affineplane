module.exports = function (tr, vec) {
  // affineplane.helm2.translateBy(tr, vec)
  //
  // Modify transformation so that its image
  // is translated by the given vector.
  // In other words the new transformation
  // transforms points further by the given
  // vector.
  //
  // Parameters
  //   tr
  //     a helm2, the transformation
  //   vec
  //     a vec2, the translation vector
  //
  // Return
  //   a helm2
  //
  return {
    a: tr.a,
    b: tr.b,
    x: tr.x + vec.x,
    y: tr.y + vec.y
  }
}
