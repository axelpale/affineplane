module.exports = (tr, vec) => {
  // @affineplane.helm2.setTranslation(tr, vec)
  //
  // Increase translation property of the transformation by a vector.
  // The dilation and rotation properties are preserved.
  //
  // Parameters:
  //   tr
  //     a helm2
  //   vec
  //     a vec2, the new translation vector
  //
  // Return:
  //   a helm2
  //
  return {
    a: tr.a,
    b: tr.b,
    x: tr.x + vec.x,
    y: tr.y + vec.y
  }
}
