module.exports = function (tr) {
  // affineplane.tran2.getTranslation(tr)
  //
  // Get translation component of the transformation as a vector.
  //
  // Parameters:
  //   tr
  //     a tran2
  //
  // Return:
  //   a vector2
  //
  return {
    x: tr.x,
    y: tr.y
  }
}
