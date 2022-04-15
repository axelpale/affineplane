module.exports = function (tr, vec) {
  // Modify transformation so that its image
  // is translated by the given vector.
  // In other words it transforms points
  // further by the given vector.
  //
  // Parameters
  //   tr
  //     tran2, a transform
  //   vec
  //     vector2, a vector { x, y }
  //
  // Return
  //   tran2, a transform
  //
  return {
    a: tr.a,
    b: tr.b,
    x: tr.x + vec.x,
    y: tr.y + vec.y
  }
}