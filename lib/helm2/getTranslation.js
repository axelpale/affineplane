module.exports = function (tr) {
  // affineplane.helm2.getTranslation(tr)
  //
  // Get translation component of the transformation as a vector.
  //
  // Parameters:
  //   tr
  //     a helm2
  //
  // Return:
  //   a vec2
  //
  return {
    x: tr.x,
    y: tr.y
  }
}
