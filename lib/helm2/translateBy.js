module.exports = function (tr, vec) {
  // affineplane.helm2.translateBy(tr, vec)
  //
  // Modify transformation so that its image
  // is translated by the given vector.
  // In other words it transforms points
  // further by the given vector.
  //
  // Parameters
  //   tr
  //     a helm2, a transform
  //   vec
  //     a vec2, a vector { x, y }
  //
  // Return
  //   a helm2, a transform
  //
  return {
    a: tr.a,
    b: tr.b,
    x: tr.x + vec.x,
    y: tr.y + vec.y
  }
}
