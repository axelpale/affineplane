module.exports = function (tr) {
  // @affineplane.helm3.getTranslation(tr)
  //
  // Get translation component of the transformation as a vector.
  //
  // Parameters:
  //   tr
  //     a helm3
  //
  // Return:
  //   a vec3
  //
  return {
    x: tr.x,
    y: tr.y,
    z: tr.z
  }
}
